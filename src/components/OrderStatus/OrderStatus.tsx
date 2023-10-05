import styles from './OrderStatus.styled';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

interface IProps {
  handleStatusOrder: () => void;
  open: boolean;
}

function OrderStatus({ handleStatusOrder, open }: IProps): JSX.Element {
  const {
    Modal,
    Overlay,
    ModalHeader,
    OrderNumber,
    ModalContent,
    Name,
    StasusDone,
    StasusAccepted,
    StasusAtwork,
    List,
    Item,
    Number,
    Comment,
    CommentBlock,
  } = styles;

  return (
    <Overlay className={open ? 'open' : ''} onClick={handleStatusOrder}>
      <Modal
        className={open ? 'open' : ''}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <Logo className="order" />
          <Button className="order" onClick={handleStatusOrder} type="button">
            <CloseIcon />
          </Button>

          <p>
            № замовлення <OrderNumber>20450739464025</OrderNumber>
          </p>
        </ModalHeader>

        <ModalContent>
          <Name>Безрук Світлана</Name>
          <Number>+38(000) 00 00 000</Number>

          <List>
            <Item>
              <StasusAccepted className="done" />
              <p>Прийнято</p>
            </Item>
            <Item>
              <StasusAtwork className="done" />
              <p>Ремонтується</p>
            </Item>
            <Item>
              <StasusDone className="" />
              <p>Готово</p>
            </Item>
          </List>

          <CommentBlock>
            <Comment>
              Коментар: <span> </span>
            </Comment>
          </CommentBlock>
        </ModalContent>
      </Modal>
    </Overlay>
  );
}

export default OrderStatus;
