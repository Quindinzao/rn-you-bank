// External Libraries
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

// Components
import TextField from '../../components/TextField';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
`;

export const Content = styled.SafeAreaView`
  width: ${Dimensions.get('screen').width - 36}px;
  align-items: center;
  justify-content: center;
`;

export const YBText = styled.Text`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 24px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoMedium};
  color: ${({ theme }) => theme.colors.text};
`;

export const YBTextFieldStyled = styled(TextField)`
  margin-bottom: 8px;
`;
