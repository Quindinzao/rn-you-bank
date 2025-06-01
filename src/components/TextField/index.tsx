// External libraries
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

// Styles
import { YBTextField } from './styles';

const TextField: React.FC<TextInputProps> = ({ ...rest }) => {
  const theme = useTheme();
  return (
    <YBTextField placeholderTextColor={theme.colors.placeholder} {...rest} />
  );
};

export default TextField;
