// External libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

// Screens
import Home from '../../screens/Home';
import BankAccountStatement from '../../screens/BankAccountStatement';
import Transaction from '../../screens/Transaction';

// Assets
import IconTransactionActive from '../../assets/icons/IconTransactionActive';
import IconTransaction from '../../assets/icons/IconTransaction';
import IconStatementActive from '../../assets/icons/IconStatementActive';
import IconStatement from '../../assets/icons/IconStatement';
import IconHomeActive from '../../assets/icons/IconHomeActive';
import IconHome from '../../assets/icons/IconHome';

const { Navigator, Screen } = createBottomTabNavigator();

const getHomeTabIcon = (focused: boolean) => focused ? <IconHomeActive /> : <IconHome />;
const getStatementTabIcon = (focused: boolean) => focused ? <IconStatementActive /> : <IconStatement />;
const getTransactionTabIcon = (focused: boolean) => focused ? <IconTransactionActive /> : <IconTransaction />;

const TabRoutes: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.item,
          borderTopWidth: 0,
          paddingTop: 12,
        },

      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => getHomeTabIcon(focused),
        }}
      />
      <Screen
        name="Statement"
        component={BankAccountStatement}
        options={{
          tabBarIcon: ({ focused }) => getStatementTabIcon(focused),
        }}
      />
      <Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({ focused }) => getTransactionTabIcon(focused),
        }}
      />
    </Navigator>
  );
};

export default TabRoutes;
