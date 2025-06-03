/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';

// Components
import MessageError from '../../components/MessageError';
import Header from '../../components/Header';

// Contexts
import { useAuth } from '../../contexts/AuthContext';

// Services
import { getUserData } from '../../services/getUserData';
// import { getTransfer } from '../../services/getTransfer';

// Interfaces
import { UserDataProps } from '../../interfaces/UserDataProps';

// Styles
import { Container, ScrollView, StatementFlatList, StyedButton, StyledTextField, Title } from './styles';
import { getTransferStatements } from '../../services/getTransferStatements';
import BankStatement from '../../components/BankStatement';
import { useTheme } from 'styled-components/native';
import RadioGroup from '../../components/RadioGroup';

const BankAccountStatement: React.FC = () => {
  const { colors } = useTheme();
  const {authData} = useAuth();
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [transferData, setTransferData] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<'sent' | 'received' | 'all'>('all');
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);
  const [minValue, setMinValue] = useState<number | undefined>(undefined);

  const callUserData = async () => {
    const token = authData?.token;

    if (!token) {return;}

    try {
      const [user, transfer ] = await Promise.all([
        getUserData(token),
        getTransferStatements({
          token,
          max_value: maxValue,
          min_value: minValue,
          transfer_type: selectedType,
          page: 1,
          per_page: 8,
        }),
      ]);

      setError('');
      setUserData(user.user_bank_accounts);
      setTransferData(transfer.bank_account_transfers);
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
      {userData && userData.length > 0 && <Header userData={userData} />}
      {transferData && <StatementFlatList
        data={transferData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item } : any) => (
          <BankStatement
            key={item.id}
            id={item.id}
            amount_to_transfer={item.amount_to_transfer}
            to_bank_account={{
              holder_name: item.to_bank_account.holder_name,
              bank_name: item.to_bank_account.bank_name,
            }}
            from_user_bank_account={{
              holder_name: item.from_user_bank_account.holder_name,
              bank_name: item.from_user_bank_account.bank_name,
              account_type: item.from_user_bank_account.account_type,
            }}
          />
        )}
        ListEmptyComponent={<Title>No bank statement available</Title>}
        ListHeaderComponent={
          <>
            <RadioGroup
              options={[
                { label: 'All', value: 'all' },
                { label: 'Sent', value: 'sent' },
                { label: 'Received', value: 'received' },
              ]}
              selectedValue={selectedType}
              onSelect={setSelectedType}
            />
            <StyledTextField placeholder="Max value" onChangeText={(event) => setMaxValue(parseInt(event))}/>
            <StyledTextField placeholder="MIn value" onChangeText={(event) => setMinValue(parseInt(event))}/>
            <StyedButton title="Apply" onPress={() => callUserData()}/>
          </>
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      />}
    </Container>
  );
};

export default BankAccountStatement;
