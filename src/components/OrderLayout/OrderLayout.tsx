import Logo from '../Logo/Logo';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import Button from '../Button/Button';
import adminPageStyles from '../../pages/Admin/AdminPage.styled';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {
  toggleModal: () => void;
  title: string;
}

function OrderLayout({
  toggleModal,
  title,
  children,
  className,
}: IProps): JSX.Element {
  const { Modal, Title, HeaderBlock, MainBlock, Overlay } = adminPageStyles;

  return (
    <Overlay>
      <Modal>
        <MainBlock className="order">
          <HeaderBlock className={className}>
            <Logo className={`${className} admin`} />
            <Title className="order">{title}</Title>

            <Button type="button" className="order" onClick={toggleModal}>
              <CloseIcon />
            </Button>
          </HeaderBlock>

          {children}
        </MainBlock>
      </Modal>
    </Overlay>
  );
}

export default OrderLayout;
