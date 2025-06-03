import { MessageErrorProps } from '../../interfaces/MessageErrorProps';
import { ButtonBackSignIn, Message, Title, YBMessageError } from './styles';
import { useAuth } from '../../contexts/AuthContext';

const MessageError: React.FC<MessageErrorProps> = ({title, message}) => {
  const {handleSignOut} = useAuth();
  return (
    <YBMessageError>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonBackSignIn title={'Back to Sign In screen'} onPress={() => handleSignOut()} />
    </YBMessageError>
  );
};

export default MessageError;
