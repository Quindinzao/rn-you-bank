// Components
import Button from '../../components/Button';

// Assets
import IconLogo from '../../assets/icons/IconLogo';

// Styles
import { Container, Content, YBText, YBTextFieldStyled } from './styles';

const SignIn = () => {
  return (
    <Container>
      <Content>
        <IconLogo height={99} width={99} />
        <YBText>Sign In</YBText>
        <YBTextFieldStyled placeholder="Type your e-mail" />
        <YBTextFieldStyled placeholder="Type your password" secureTextEntry />
        <Button title="Sign In" />
        <Button title="Register" buttonType="no-background" />
      </Content>
    </Container>
  );
};

export default SignIn;
