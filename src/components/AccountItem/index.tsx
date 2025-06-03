
import { TouchableOpacityProps } from 'react-native';
import { UserDataAccountItemProps } from '../../interfaces/UserDataProps';
import { Row, YBAccountItem, YBAccountNumber, YBBankName, YBName } from './styles';

const AccountItem: React.FC<UserDataAccountItemProps & TouchableOpacityProps> = ({
  holder_name,
  bank_name,
  account_number,
  account_digit,
  ...rest
}) => {
  return (
    <YBAccountItem {...rest}>
      <Row>
        <YBName>{holder_name}</YBName>
        <YBBankName>{bank_name}</YBBankName>
      </Row>
      <YBAccountNumber>{account_number}-{account_digit}</YBAccountNumber>
    </YBAccountItem>
  );
};

export default AccountItem;
