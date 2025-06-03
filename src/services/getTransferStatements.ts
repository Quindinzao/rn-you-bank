import { Alert } from 'react-native';
import { api } from './api';

interface GetStatementsParams {
  token: string;
  // start_date?: string; // 'YYYY-MM-DD' ou ISO 8601
  // end_date?: string;
  min_value?: number | undefined;
  max_value?: number | undefined;
  transfer_type?: 'sent' | 'received' | 'all';
  per_page?: number | undefined;
  page?: number | undefined;
}

export const getTransferStatements = async (params: GetStatementsParams) => {
  const {
    token,
    // start_date,
    // end_date,
    min_value,
    max_value,
    transfer_type,
    per_page = 10,
    page = 1,
  } = params;
  Alert.alert(typeof min_value, typeof max_value);
  try {
    const response = await api.get('/users/bank_account_transfers/statements', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      params: {
        min_value,
        max_value,
        transfer_type,
        per_page,
        page,
      },
    });

    return response.data;
  } catch (err: any) {
    Alert.alert('Error', 'Something went wrong, please try again later.' + err.message);
    throw err;
  }
};
