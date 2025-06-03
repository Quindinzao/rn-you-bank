// External Libraries
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  flex: 1;

  background-color: ${props => props.theme.colors.secondary};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.colors.secondary};
`;

export const HomeFlatList = styled.FlatList`
  padding: 18px;
  margin-bottom: 2px;
`;

export const Content = styled.View`
  height: 100%;
  width: ${Dimensions.get('screen').width - 36}px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: blue;
`;

export const Title = styled.Text`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 22px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoMedium};
  color: ${({ theme }) => theme.colors.text};
`;
