// External libraries
import styled from 'styled-components/native';

// Interfaces
import { ButtonPropsStyled } from '../../interfaces/ButtonProps';

export const YBButton = styled.TouchableOpacity<ButtonPropsStyled>`
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.borderRadii};
  background-color: ${({ theme, buttonType }) =>
    buttonType === 'default'
    ? theme.colors.item
    : 'transparent'
  };
`;

export const YBText = styled.Text<ButtonPropsStyled>`
  font-size: 18px;

  font-family: ${({ theme }) => theme.fontFamily.nunitoSemiBold};
  color: ${({ theme, buttonType }) =>
    buttonType === 'default'
    ? theme.colors.text
    : theme.colors.primary
  };
`;
