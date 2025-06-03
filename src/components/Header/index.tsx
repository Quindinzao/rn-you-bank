
import { useState } from 'react';
import { Row, YBAccountNumber, YBAmount, YBHeader, YBName } from './styles';
import { TouchableOpacity, View } from 'react-native';
import IconForward from '../../assets/icons/IconForward';
import IconVisible from '../../assets/icons/IconVisible';
import IconInvisible from '../../assets/icons/IconInvisible';
import { HeaderProps } from '../../interfaces/HeaderProps';

const Header: React.FC<HeaderProps> = ({userData}) => {
  const [indexAccount, setIndexAccount] = useState<number>(0);
  const [isAmountVisible, setIsAmountVisible] = useState<boolean>(true);

  const changeIndexAccount = () => {
    if (userData.length > 0) {
      const nextIndex = indexAccount === userData.length - 1 ? 0 : indexAccount + 1;
      setIndexAccount(nextIndex);
    }
  };

  return (
    <YBHeader>
      <Row>
        <View>
          <YBName>{userData[indexAccount]?.holder_name || ''}</YBName>
          <YBAccountNumber>
            Number account: {userData[indexAccount]?.account_number || ''}
            -
            {userData[indexAccount]?.account_digit || ''}
          </YBAccountNumber>
        </View>
        <TouchableOpacity activeOpacity={0.6} onPress={changeIndexAccount}>
          <IconForward height={24} width={24} />
        </TouchableOpacity>
      </Row>
      <Row>
        <YBAmount>{'R$ '}
          {
            isAmountVisible ?
              Number(userData[indexAccount]?.amount || '').toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : '••••'
          }
        </YBAmount>
        <TouchableOpacity activeOpacity={0.6} onPress={() => setIsAmountVisible(!isAmountVisible)}>
          {
            isAmountVisible
              ? <IconVisible height={24} width={24} />
              : <IconInvisible height={24} width={24} />
          }
        </TouchableOpacity>
      </Row>
    </YBHeader>
  );
};

export default Header;
