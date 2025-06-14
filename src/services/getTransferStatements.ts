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
    min_value,
    max_value,
    transfer_type,
    per_page = 10,
    page = 1,
  } = params;
  try {
    const query: Record<string, any> = {
      per_page,
      page,
    };

    if (min_value) {
      query.min_value = min_value;
    } else {
      delete query.min_value;
    }
    if (max_value) {
      query.max_value = max_value;
    } else {
      delete query.max_value;
    }
    if (transfer_type && transfer_type !== 'all') {
      query.transfer_type = transfer_type;
    } else {
      delete query.transfer_type;
    }

    const response = await api.get('/users/bank_account_transfers/statements', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      params: query,
    });

    return response.data;
  } catch (err: any) {
    Alert.alert('Error', 'Something went wrong, please try again later.' + err.message);
    throw err;
  }
};
