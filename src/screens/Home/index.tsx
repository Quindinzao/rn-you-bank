/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useTheme } from 'styled-components/native';

// Components
import MessageError from '../../components/MessageError';
import Header from '../../components/Header';
import BankStatement from '../../components/BankStatement';

// Contexts
import { useAuth } from '../../contexts/AuthContext';

// Services
import { getUserData } from '../../services/getUserData';
import { getTransferStatements } from '../../services/getTransferStatements';

// Interfaces
import { UserDataProps } from '../../interfaces/UserDataProps';

// Styles
import { Container, ScrollView, HomeFlatList, Title, SignOutButton } from './styles';

const Home: React.FC = () => {
  const { colors } = useTheme();
  const { authData, handleSignOut } = useAuth();
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
      {userData && <Header userData={userData} />}
      {transferData &&

        <HomeFlatList
          data={transferData}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item, index } : any) => (
            <BankStatement
              key={index}
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
      }
      <SignOutButton title="Sign Out" onPress={handleSignOut} />
    </Container>
  );
};

export default Home;
