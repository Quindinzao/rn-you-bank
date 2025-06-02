// External libraries
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SignIn from '../../screens/SignIn';
import Register from '../../screens/Register';

// Routes
import { propsNavigationStack } from '../model';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

const AuthStack: React.FC = () => {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};

export default AuthStack;
