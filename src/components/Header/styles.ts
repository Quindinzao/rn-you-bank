// External libraries
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android' ? 32 : 0;

export const YBHeader = styled.View`
  height: ${isAndroid ? 190 : 150}px;
  width: 100%;
  padding: 20px 24px;
  padding-top: ${isAndroid ? 64 : 12}px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

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
  font-size: 20px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoMedium};
  color: ${({ theme }) => theme.colors.text};
`;

export const YBAccountNumber = styled.Text`
  margin: 0px;
  font-size: 14px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoRegular};
  color: ${({ theme }) => theme.colors.text};
`;

export const YBAmount = styled.Text`
  margin: 0px;
  font-size: 24px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoBold};
  color: ${({ theme }) => theme.colors.primary};
`;
