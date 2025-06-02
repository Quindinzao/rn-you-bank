// External Libraries
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android' ? 32 : 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.colors.secondary};
`;

export const Content = styled.View`
  height: 100%;
  width: ${Dimensions.get('screen').width - 36}px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: blue;
`;

export const Header = styled.View`
  height: ${isAndroid ? 190 : 150}px;
  width: 100%;
  padding: 20px 24px;
  padding-top: ${isAndroid ? 54 : 24}px;
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
  width: 100%;
  margin: 0px;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoMedium};
  color: ${({ theme }) => theme.colors.text};
`;

export const YBAccountNumber = styled.Text`
  width: 100%;
  margin: 0px;
  font-size: 12px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoRegular};
  color: ${({ theme }) => theme.colors.text};
`;

export const YBAmount = styled.Text`
  margin: 0px;
  font-size: 18px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoBold};
  color: ${({ theme }) => theme.colors.primary};
`;
