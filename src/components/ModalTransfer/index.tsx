import { Modal as YBModal } from 'react-native';
import { CloseButton, ModalContent, Row, YBTitle } from './styles';

interface ModalTransferProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ModalTransfer: React.FC<ModalTransferProps> = ({
  isModalVisible,
  setIsModalVisible,
  children,
}) => {

  const closeModal = () => setIsModalVisible(false);

  return (
    <YBModal
      animationType="slide"
      transparent
      visible={isModalVisible}
      onRequestClose={closeModal}
    >
      <ModalContent>
        <Row>
          <YBTitle>Transfer</YBTitle>
          <CloseButton onPress={closeModal}>

          <YBTitle>X</YBTitle>
          </CloseButton>
        </Row>

        {children}

      </ModalContent>
    </YBModal>
  );
};

export default ModalTransfer;
