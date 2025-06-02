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

    Alert.alert('Success', 'Account created successfully!');
    return response.data;

  } catch (err: any) {
    const errorMessage = err.response?.data?.error || err.message || 'Unknown error';
    console.log(errorMessage);
    Alert.alert('Error', 'Try later.');
  }
};
