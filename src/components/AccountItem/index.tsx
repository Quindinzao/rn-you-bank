import { UserDataAccountItemProps } from '../../interfaces/UserDataProps';
import { Row, YBAccountItem, YBAccountNumber, YBBankName, YBName } from './styles';

interface TouchableProps {
  onPress: () => void;
}

const AccountItem: React.FC<UserDataAccountItemProps & TouchableProps> = ({
  holder_name,
  bank_name,
  account_number,
  account_digit,
  onPress,
}) => {
  return (
    <YBAccountItem onPress={onPress}>
      <Row>
        <YBName>{holder_name}</YBName>
        <YBBankName>{bank_name}</YBBankName>
      </Row>
      <YBAccountNumber>{account_number}-{account_digit}</YBAccountNumber>
    </YBAccountItem>
  );
};

export default AccountItem;
