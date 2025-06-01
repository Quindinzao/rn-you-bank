// Interfaces
import { ButtonProps } from '../../interfaces/ButtonProps';

// Styles
import { YBButton, YBText } from './styles';

const Button: React.FC<ButtonProps> = ({title, buttonType = 'default', ...rest}) => {
  return (
    <YBButton buttonType={buttonType} activeOpacity={0.55} {...rest}>
      <YBText buttonType={buttonType}>{title}</YBText>
    </YBButton>
  );
};

export default Button;
