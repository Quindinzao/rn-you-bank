import styled from 'styled-components/native';

export const YBBankStatement = styled.TouchableOpacity`
  height: 104px;
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  justify-content: space-between;

  border-radius: ${({ theme }) => theme.borderRadii};
  background-color: ${({ theme }) => theme.colors.item};
`;

export const Row = styled.View`
  width: 100%;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const YBName = styled.Text`
  margin: 0px;
  font-size: 16px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoMedium};
  color: ${({ theme }) => theme.colors.text};
`;

export const YBAccountNumber = styled.Text`
  margin: 0px;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoBold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const YBBankName = styled.Text`
  margin: 0px;
  font-size: 12px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoMedium};
  color: ${({ theme }) => theme.colors.text};
`;

