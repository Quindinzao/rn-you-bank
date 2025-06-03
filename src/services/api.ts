// External Libraries
import axios from 'axios';
import { Platform } from 'react-native';

const baseUrl = Platform.OS === 'ios' ? 'http://localhost:3000/v1' : 'http://10.0.2.2:3000/v1';

export const api = axios.create({
	baseURL: baseUrl,
});
