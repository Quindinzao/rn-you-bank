import styled from 'styled-components/native';
import Button from '../Button';

export const YBMessageError = styled.View`
  width: 100%;
  padding: 18px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  font-size: 28px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoSemiBold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Message = styled.Text`
  margin-top: 24px;
  font-size: 20px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoSemiBold};
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonBackSignIn = styled(Button)`
  margin-top: 24px;
`;
