// External libraries
import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type propsNavigationStack = {
  SignIn: undefined;
  Register: undefined;
  TabRoutes: undefined;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
