// External libraries
import styled from 'styled-components/native';

export const YBTextField = styled.TextInput`
  width: 100%;
  height: 54px;
  font-size: 16px;
  padding-right: 18px;
  padding-left: 18px;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoRegular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.item};
`;
