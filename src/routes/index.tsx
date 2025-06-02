// External libraries
import React from 'react';
// import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { styled, useTheme } from 'styled-components/native';
import { StatusBar, StatusBarStyle } from 'react-native';

// Routes
import AppStack from './stacks/app.routes';
import AuthStack from './stacks/auth.routes';

// Contexts
// import { useAuth } from '../contexts/Auth';

const Routes: React.FC = () => {
  const themeBar = useTheme();
  // const { authData, isLoading } = useAuth();
  // if (!isLoading) {
  //   BootSplash.hide({ fade: true });
  // }

  return (
    <StatusBarBackground>
      <StatusBar
        barStyle={themeBar.statusBarStyle as StatusBarStyle}
        backgroundColor={themeBar.colors.item} // Só funciona no Android
      />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </StatusBarBackground>
  );
};

const StatusBarBackground = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.item};
`;

export default Routes;
