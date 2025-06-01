// Components
import Button from '../../components/Button';

// Assets
import Logo from '../../assets/icons/Logo';

// Styles
import { Container, Content, YBText, YBTextFieldStyled } from './styles';

const Login = () => {
  return (
    <Container>
      <Content>
        <Logo height={99} width={99} />
        <YBText>Login</YBText>
        <YBTextFieldStyled placeholder="Type your e-mail" />
        <YBTextFieldStyled placeholder="Type your password" />
        <Button title="Sign In" />
        <Button title="Register" buttonType="no-background" />
      </Content>
    </Container>
  );
};

export default Login;
