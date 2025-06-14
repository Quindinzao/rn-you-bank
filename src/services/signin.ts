// External libraries
import { Alert } from 'react-native';

// Services
import { api } from './api';

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = async (values: SignInProps) => {
  try {
    const response = await api.put('/auth/sign_in', {
      user: values,
    });
    if (!response.data?.token) {
      throw new Error('Invalid response from server.');
    }
    return response.data;
  } catch (err: any) {
    if (err.status === 401) {
      Alert.alert('Oops!', 'E-mail or password is incorrect.');
    } else {
      Alert.alert('Error', 'Something went wrong, please try again later.');
    }

    throw err;
  }
};
