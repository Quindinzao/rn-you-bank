// External libraries
import { Alert } from 'react-native';

// Services
import { api } from './api';

interface transferProps {
  to_user_bank_account_id: number;
  from_user_bank_account_id: number;
  transfer_type: number;
  amount_to_transfer: number;
}

export const transfer = async (values: transferProps, token: string) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  try {
    const response = await api.post(
      '/users/bank_account_transfers',
      {
        bank_account_transfer: values,
        make_success: true,
      },
      {
        headers: headers,
      }
    );

    Alert.alert('Successfully', `${values.amount_to_transfer} reais were transferred successfully.`);

    return response.data;
  } catch (err: any) {
    if (err.status === 401) {
      Alert.alert('Oops!', 'Your token has expired.');
    } else if (err.status === 403) {
      Alert.alert('Access Denied', 'You do not have permission to perform this action.');
    } else {
      Alert.alert('Error', 'Something went wrong, please try again later.');
    }

    throw err;
  }
};
