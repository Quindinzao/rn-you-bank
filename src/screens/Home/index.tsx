// External libraries
import { TouchableOpacity, View } from 'react-native';

// Assets
import IconVisible from '../../assets/icons/IconVisible';

// Styles
import { Container, Header, Row, YBAccountNumber, YBAmount, YBName } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <View>
          <YBName>Joao Victor Fernandes</YBName>
          <YBAccountNumber>Conta: 12345-6</YBAccountNumber>
        </View>
        <Row>
          <YBAmount>R$ 1234,56</YBAmount>
          <TouchableOpacity activeOpacity={0.6}>
            <IconVisible height={24} width={24} />
          </TouchableOpacity>
        </Row>
      </Header>
    </Container>
  );
};

export default Home;
