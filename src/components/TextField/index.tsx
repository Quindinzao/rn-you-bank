// External libraries
import { useTheme } from 'styled-components/native';

// Interfaces
import { TextFieldProps } from '../../interfaces/TextFieldProps';

// Styles
import { ErrorText, StyledInput, YBTextField } from './styles';

const TextField: React.FC<TextFieldProps> = ({ error, ...rest }) => {
  const theme = useTheme();

  return (
    <YBTextField>
      <StyledInput placeholderTextColor={theme.colors.placeholder} {...rest} />
      {error && <ErrorText>{error}</ErrorText>}
    </YBTextField>
  );
};

export default TextField;
