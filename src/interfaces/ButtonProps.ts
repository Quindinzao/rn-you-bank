// External libraries
import { TouchableHighlightProps } from 'react-native';

type ButtonType = 'default' | 'no-background'

export interface ButtonPropsStyled {
   buttonType: ButtonType;
}

export interface ButtonProps extends TouchableHighlightProps {
  title: string;
  buttonType?: ButtonType;
}
