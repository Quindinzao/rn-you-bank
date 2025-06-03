
// External libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

// Services
import { signIn } from '../services/signIn';

export interface AuthData {
  token: string;
  exp: number;
}

interface AuthContextData {
  authData?: AuthData;
  handleSignIn: (email: string, password: string) => Promise<void>;
  handleSignOut: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children?: ReactNode;
}

const AUTH_KEY = '@app/auth';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem(AUTH_KEY);
    if (auth) {
      setAuthData(JSON.parse(auth) as AuthData);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await signIn({ email, password });

      if (!result?.token) {
        throw new Error('Invalid response from authentication');
      }

      const auth: AuthData = {
        token: result.token,
        exp: result.exp,
      };

      setAuthData(auth);
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(auth));
    } catch (error: any) {
      console.log(':/', 'Failed to sign in.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async (): Promise<void> => {
    setAuthData(undefined);
    await AsyncStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider value={{ authData, handleSignIn, handleSignOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
