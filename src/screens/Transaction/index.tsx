/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components
import MessageError from '../../components/MessageError';
import AccountItem from '../../components/AccountItem';
import Header from '../../components/Header';
import ModalTransfer from '../../components/ModalTransfer';

// Services
import { getUserData } from '../../services/getUserData';

// Contexts
import { useAuth } from '../../contexts/AuthContext';
import { getAccountsToTransfer } from '../../services/getAccountsToTransfer';

// Interfaces
import { UserDataProps } from '../../interfaces/UserDataProps';

// Styles
import {
  AccountItemFlatList,
  ButtonStyled,
  Container,
  Content,
  ScrollView,
  TextFieldStyled,
  Title,
} from './styles';
import { transfer } from '../../services/transfer';
import { useTheme } from 'styled-components/native';

const TransferSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError('Amount must be a number')
    .positive('Amount must be positive')
    .required('Amount is required'),
  description: Yup.string().max(100, 'Max 100 characters'),
});

const Transaction: React.FC = () => {
  const { authData } = useAuth();
  const { colors } = useTheme();
  const [selectedItem, setSelectedItem] = useState<UserDataProps>();
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [accountsData, setAccountsData] = useState<UserDataProps[]>([]);
  const [error, setError] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentAccountIndex, setCurrentAccountIndex] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleAccountIndexChange = (index: number) => {
    setCurrentAccountIndex(index);
  };

  const callUserData = async () => {
    const token = authData?.token;

    if (!token) {return;}

    try {
      const [user, accounts ] = await Promise.all([
        getUserData(token),
        getAccountsToTransfer(token),
      ]);

      setError('');
      setUserData(user.user_bank_accounts);
      setAccountsData(accounts.user_bank_accounts);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await callUserData();
    setRefreshing(false);
  };

  useEffect(() => {
    callUserData();
  }, []);

  if (error) {
    return (
      <ScrollView>
        <MessageError title={'Oops!'} message={'Check your internet connection or try to sign in again.'} />
      </ScrollView>
    );
  }

  return (
    <Container>
      {userData && userData.length > 0 &&
      <Header userData={userData} onIndexChange={handleAccountIndexChange} />}
      <AccountItemFlatList
        data={accountsData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item } : any) => (
          <AccountItem
            key={item.id}
            id={item.id}
            holder_name={item.holder_name}
            bank_name={item.bank_name}
            account_number={item.account_number}
            account_digit={item.account_digit}
            onPress={() => {
              setIsModalVisible(true);
              setSelectedItem(item);
            }}
          />
        )}
        ListEmptyComponent={<Title>No accounts available</Title>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      />
      {authData &&
        <ModalTransfer isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
          <Content>
            <Formik
              initialValues={{ amount: '', description: '' }}
              validationSchema={TransferSchema}
              onSubmit={(values) => {
                transfer(
                  {
                    to_user_bank_account_id: selectedItem?.id || 0,
                    from_user_bank_account_id: userData[currentAccountIndex].id,
                    transfer_type: 1,
                    amount_to_transfer: parseFloat(values.amount),
                  },
                  authData.token
                );
                setIsModalVisible(false);
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <Content>
                  <TextFieldStyled
                    placeholder="Destiny account"
                    editable={false}
                    value={
                      selectedItem
                        ? `${selectedItem.account_number}-${selectedItem.account_digit}`
                        : ''
                    }
                  />

                  <TextFieldStyled
                    placeholder="Amount"
                    keyboardType="number-pad"
                    onChangeText={handleChange('amount')}
                    value={values.amount}
                    error={touched.amount ? errors.amount : undefined}
                  />

                  <TextFieldStyled
                    placeholder="Description (optional)"
                    onChangeText={handleChange('description')}
                    value={values.description}
                    error={touched.description ? errors.description : undefined}
                  />

                  <ButtonStyled title="Send" onPress={handleSubmit as any} />
                </Content>
              )}
            </Formik>
          </Content>
        </ModalTransfer>
      }
    </Container>
  );
};

export default Transaction;
