/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './screens/LogIn';
// import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import { light, dark } from './styles/theme';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const scheme = useColorScheme();
  const currentTheme = scheme === 'dark' ? dark : light;

  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
};

export default App;
