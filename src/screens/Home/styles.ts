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

export const Content = styled.View`
  height: 100%;
  width: ${Dimensions.get('screen').width - 36}px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: blue;
`;
