// External libraries
import { Alert } from 'react-native';

// Services
import { api } from './api';

interface SignInProps {
  email: string;
  password: string;
}

export const handleSignIn = async (values: SignInProps) => {
  try {
    const response = await api.put('/auth/sign_in', {
      user: values,
    });
    return response.data;
  } catch (err: any) {
    if (err.status === 401) {
      Alert.alert('Oops!', 'E-mail or password is incorrect.');
    } else {
      Alert.alert('Error', 'Something went wrong, please try later.');
    }
  }
};
