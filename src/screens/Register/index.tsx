// Components
import Button from '../../components/Button';

// Assets
import IconLogo from '../../assets/icons/IconLogo';

// Styles
import { Container, Content, YBText, YBTextFieldStyled } from './styles';

const Register = () => {
  return (
    <Container>
      <Content>
        <IconLogo height={99} width={99} />
        <YBText>Register</YBText>
        <YBTextFieldStyled placeholder="Type your name" />
        <YBTextFieldStyled placeholder="Type your e-mail" />
        <YBTextFieldStyled placeholder="Type your password" secureTextEntry />
        <Button title="Register" />
        <Button title="Sign In" buttonType="no-background" />
      </Content>
    </Container>
  );
};

export default Register;
