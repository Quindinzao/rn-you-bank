// External libraries
import styled from 'styled-components/native';

export const YBTextField = styled.View`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 54px;
  font-size: 16px;
  padding-right: 18px;
  padding-left: 18px;
  border-radius: 2px;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoRegular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.item};
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  right: 10px;

  color: ${({ theme }) => theme.colors.error};
`;
