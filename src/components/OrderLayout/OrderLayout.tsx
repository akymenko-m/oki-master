import Logo from '../Logo/Logo';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import Button from '../Button/Button';
import appStyles from '../App/App.styled';
import adminPageStyles from '../../pages/Admin/AdminPage.styled';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {
  toggleModal: () => void;
  title: string;
}

function OrderLayout({ toggleModal, title, children }: IProps): JSX.Element {
  const { Container } = appStyles;
  const { Modal, Title, HeaderBlock, MainBlock } = adminPageStyles;

  return (
    <Modal>
      <Container>
        <MainBlock>
          <HeaderBlock>
            <Logo className="admin" />
            <Title>{title}</Title>

            <Button
              type="button"
              className="order-status order"
              onClick={toggleModal}
            >
              <CloseIcon />
            </Button>
          </HeaderBlock>

          {children}
        </MainBlock>
      </Container>
    </Modal>
  );
}

export default OrderLayout;
