// import { UserDataAccountItemProps } from '../../interfaces/UserDataProps';
import { BankStatementProps } from '../../interfaces/TransactionProps';
import { formatCurrency } from '../../utils/formatCurrency';
import { Row, YBBankStatement, YBAccountNumber, YBBankName, YBName } from './styles';

interface TouchableProps {
  onPress: () => void;
}

const BankStatement: React.FC<BankStatementProps & TouchableProps> = ({
  from_user_bank_account,
  to_bank_account,
  amount_to_transfer,
  onPress,
}) => {
  return (
    <YBBankStatement onPress={onPress}>
      <Row>
        <YBName>From: {from_user_bank_account.holder_name}</YBName>
        <YBBankName>{from_user_bank_account.bank_name}</YBBankName>
      </Row>
      <Row>
        <YBName>To: {to_bank_account.holder_name}</YBName>
        <YBBankName>{to_bank_account.bank_name}</YBBankName>
      </Row>
      <YBAccountNumber>{formatCurrency(amount_to_transfer)}</YBAccountNumber>
    </YBBankStatement>
  );
};

export default BankStatement;
