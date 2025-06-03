import styled from 'styled-components/native';

export const ModalContent = styled.View`
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 12px;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const YBTitle = styled.Text`
  margin: 0px;
  font-size: 22px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoBold};
  color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 12px;
`;

