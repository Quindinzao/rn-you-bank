// Styles

import { TouchableOpacity, View } from 'react-native';
import { Container, Header, Row, YBAccountNumber, YBAmount, YBName } from './styles';
import IconVisible from '../../assets/icons/IconVisible';


const Transaction: React.FC = () => {
  return (
    <Container>
      <Header>
        <View>
          <YBName>Joao Victor Fernandes</YBName>
          <YBAccountNumber>Conta: 12345-6</YBAccountNumber>
        </View>
        <Row>
          <YBAmount>R$ 1234,56</YBAmount>
          <TouchableOpacity activeOpacity={0.6}><IconVisible /></TouchableOpacity>
        </Row>
      </Header>
    </Container>
  );
};

export default Transaction;
