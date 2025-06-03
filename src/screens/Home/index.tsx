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
import { Container, ScrollView, HomeFlatList, Title } from './styles';
import { getTransferStatements } from '../../services/getTransferStatements';
import BankStatement from '../../components/BankStatement';
import { useTheme } from 'styled-components/native';

const Home: React.FC = () => {
  const { colors } = useTheme();
  const {authData} = useAuth();
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [transferData, setTransferData] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const callUserData = async () => {
    const token = authData?.token;

    if (!token) {return;}

    try {
      const [user, transfer ] = await Promise.all([
        getUserData(token),
        getTransferStatements({
          token: token,
          // transfer_type: 'sent',
          page: 1,
          per_page: 3,
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
      {transferData && transferData.length > 0 && <HomeFlatList
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
            onPress={() => {
              console.log('done');
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
      />}
    </Container>
  );
};

export default Home;
