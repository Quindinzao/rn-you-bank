// External Libraries
import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components
import Button from '../../components/Button';

// Routes
import { propsStack } from '../../routes/models';

// Services
import { handleRegister } from '../../services/register';

// Assets
import IconLogoDark from '../../assets/icons/IconLogoDark';
import IconLogoLight from '../../assets/icons/IconLogoLight';

// Styles
import {
  Container,
  Content,
  YBText,
  YBTextFieldStyled,
} from './styles';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('E-mail is required'),
  password: Yup.string().min(4, 'Min. 4 characters').required('Password is required'),
});

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { name: themeName } = useTheme();
  const navigation = useNavigation<propsStack>();

  const goToSignIn = () => {
    navigation.goBack();
  };

  const handleSubmit = async (
    name: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);

    await handleRegister({
      name,
      email,
      password,
    });

    setIsLoading(false);
    navigation.goBack();
  };

  return (
    <Container>
      <Content>
        {themeName === 'dark'
          ? <IconLogoDark height={99} width={99} />
          : <IconLogoLight height={99} width={99} />
        }
        <YBText>Register</YBText>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={({ name, email, password }) => handleSubmit(name, email, password)}
        >
          {({ handleChange, handleBlur, handleSubmit: formHandleSubmit, values, errors, touched }) => (
            <>
              <YBTextFieldStyled
                placeholder="Type your name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                error={touched.name ? errors.name : undefined}
                autoCapitalize="words"
              />

              <YBTextFieldStyled
                placeholder="Type your e-mail"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                autoCapitalize="none"
                error={touched.email ? errors.email : undefined}
              />

              <YBTextFieldStyled
                placeholder="Type your password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={touched.password ? errors.password : undefined}
                keyboardType="number-pad"
              />

              <Button title="Register" onPress={formHandleSubmit as any} isLoading={isLoading} />
              <Button title="Go to Sign In" buttonType="no-background" onPress={goToSignIn} />
            </>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Register;
