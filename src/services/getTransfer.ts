// External libraries
import { Alert } from 'react-native';

// Services
import { api } from './api';

export const getTransfer = async (token: string) => {
  try {
    const response = await api.get('/users/bank_account_transfers/statements', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    return response.data;
  } catch (err: any) {
    Alert.alert('Error', 'Something went wrong, please try again later.');
  }
};
