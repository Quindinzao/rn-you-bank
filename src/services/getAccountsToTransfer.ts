// External libraries
import { Alert } from 'react-native';

// Services
import { api } from './api';

export const getAccountsToTransfer = async (token: string) => {
  try {
    const response = await api.get('/users/bank_accounts', {
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
