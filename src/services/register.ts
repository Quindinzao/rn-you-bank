// External libraries
import { Alert } from 'react-native';

// Services
import { api } from './api';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export const handleRegister = async (values: RegisterProps) => {
  try {
    const response = await api.post('/auth/sign_up', {
      user: values,
    });

    Alert.alert('Success', 'Transfer successfully!');
    return response.data;

  } catch (err: any) {
    Alert.alert('Error', 'Something went wrong, please try again later.');
  }
};
