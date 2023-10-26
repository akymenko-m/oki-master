import LogInForm from '../LogInForm/LogInForm';
import Logo from '../Logo/Logo';
import styles from './LogInModal.styled';

interface IProps {
  logIn: () => void;
}

function LogInModal({ logIn }: IProps): JSX.Element {
  const { Modal, Text } = styles;

  return (
    <Modal>
      <Logo className="login" />
      <Text>Вхід</Text>
      <LogInForm logIn={logIn} />
    </Modal>
  );
}

export default LogInModal;
