/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

// Components
import MessageError from '../../components/MessageError';
import AccountItem from '../../components/AccountItem';
import Header from '../../components/Header';

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
import ModalTransfer from '../../components/ModalTransfer';

const Transaction: React.FC = () => {
  const {authData} = useAuth();
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [accountsData, setAccountsData] = useState<UserDataProps[]>([]);
  const [error, setError] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const callUserData = async () => {
    const token = authData?.token;

    if (!token) {return;}

    try {
      const [user, accounts ] = await Promise.all([
        getUserData(token),
        getAccountsToTransfer(token),
      ]);

      Alert.alert('accounts', JSON.stringify(accounts.user_bank_accounts));

      setError('');
      setUserData(user.user_bank_accounts);
      setAccountsData(accounts.user_bank_accounts);
    } catch (err: any) {
      Alert.alert('Error', err.message);
      setError(err.message);
    }
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
      {userData && userData.length > 0 && <Header userData={userData} />}
      <AccountItemFlatList
        data={accountsData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item } : any) => (
          <AccountItem
            key={item.id}
            holder_name={item.holder_name}
            bank_name={item.bank_name}
            account_number={item.account_number}
            account_digit={item.account_digit}
            onPress={() => setIsModalVisible(true)}
          />
        )}
        ListEmptyComponent={<Title>No accounts available</Title>}
      />
      <ModalTransfer isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
      <Content>
        <TextFieldStyled placeholder="Destiny account" />
        <TextFieldStyled placeholder="Amount" />
        <TextFieldStyled placeholder="Description (optional)"/>
        <ButtonStyled title="Send" />
      </Content>
      </ModalTransfer>
    </Container>
  );
};

export default Transaction;
