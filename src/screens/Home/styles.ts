// External Libraries
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

// Components
import Button from '../../components/Button';

const width = Dimensions.get('screen').width;

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
  padding-right: 18px;
  padding-left: 18px;
  margin-bottom: 4px;
`;

export const Content = styled.View`
  height: 100%;
  width: ${width - 36}px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 22px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoMedium};
  color: ${({ theme }) => theme.colors.text};
`;

export const SignOutButton = styled(Button)`
  width: ${width - 36}px;
  margin-bottom: 16px;
`;
