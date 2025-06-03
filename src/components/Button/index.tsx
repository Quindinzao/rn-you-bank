// Interfaces
import { ActivityIndicator } from 'react-native';
import { ButtonProps } from '../../interfaces/ButtonProps';

// Styles
import { YBButton, YBText } from './styles';
import { useTheme } from 'styled-components/native';

const Button: React.FC<ButtonProps> = ({
  title,
  isLoading,
  buttonType = 'default',
  ...rest
}) => {
  const { colors } = useTheme();
  return (
    <YBButton buttonType={buttonType} activeOpacity={0.55} disabled={isLoading} {...rest}>
      {!isLoading
        ? <YBText buttonType={buttonType}>{title}</YBText>
        : <ActivityIndicator color={colors.text} />
      }
    </YBButton>
  );
};

export default Button;
