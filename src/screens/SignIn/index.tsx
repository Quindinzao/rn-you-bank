// External libraries
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { useTheme } from 'styled-components/native';
import * as Yup from 'yup';

// Components
import Button from '../../components/Button';

// Routes
import { propsStack } from '../../routes/models';

// Contexts
import { useAuth } from '../../contexts/AuthContext';

// Assets
import IconLogoDark from '../../assets/icons/IconLogoDark';
import IconLogoLight from '../../assets/icons/IconLogoLight';

// Styles
import { Container, Content, YBText, YBTextFieldStyled } from './styles';

const SignInSchema = Yup.object().shape({
  email: Yup.string().required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

const SignIn = () => {
  const { handleSignIn , isLoading } = useAuth();
  const { name } = useTheme();
  const navigation = useNavigation<propsStack>();
  const goToRegister = () => navigation.navigate('Register');

  return (
    <Container>
      <Content>
        {name === 'dark' ? (
          <IconLogoDark height={99} width={99} />
        ) : (
          <IconLogoLight height={99} width={99} />
        )}
        <YBText>Sign In</YBText>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmit={({ email, password }) => handleSignIn(email, password)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <YBTextFieldStyled
                placeholder="Type your e-mail"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email ? errors.email : undefined}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <YBTextFieldStyled
                placeholder="Type your password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={touched.password ? errors.password : undefined}
                secureTextEntry
              />
              <Button title="Sign In" onPress={handleSubmit as any} isLoading={isLoading} />
              <Button title="Go to Register" buttonType="no-background" onPress={goToRegister} />
            </>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default SignIn;
