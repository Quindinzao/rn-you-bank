// External libraries
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('screen').width;

export const Container = styled.View`
  width: ${width - 36}px;
  margin-top: 18px;
  flex-direction: column;
  gap: 12px;
`;

export const RadioButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const OuterCircle = styled.View<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ selected, theme }) => (selected ? theme.colors.primary : '#999')};
  align-items: center;
  justify-content: center;
`;

export const InnerCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
