/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

// Components
import MessageError from '../../components/MessageError';
import Header from '../../components/Header';

// Contexts
import { useAuth } from '../../contexts/AuthContext';

// Services
import { getUserData } from '../../services/getUserData';
import { getTransfer } from '../../services/getTransfer';

// Interfaces
import { UserDataProps } from '../../interfaces/UserDataProps';

// Styles
import { Container, ScrollView } from './styles';

const Home: React.FC = () => {
  const {authData} = useAuth();
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  const [transferData, setTransferData] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  const callUserData = async () => {
    const token = authData?.token;

    if (!token) {return;}

    try {
      const [user, transfer ] = await Promise.all([
        getUserData(token),
        getTransfer(token),
      ]);

      setError('');
      setUserData(user.user_bank_accounts);
      setTransferData(transfer.bank_account_transfers);
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
    <ScrollView>
      <Container>
        {userData && userData.length > 0 && <Header userData={userData} />}
      </Container>
    </ScrollView>
  );
};

export default Home;
