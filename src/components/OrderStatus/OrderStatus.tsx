import styles from './OrderStatus.styled';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { IItem } from '../../interfaces/admin/item.interface';

interface IProps {
  handleStatusOrder: () => void;
  open: boolean;
  orderData: IItem | undefined;
}

function OrderStatus({
  handleStatusOrder,
  open,
  orderData,
}: IProps): JSX.Element {
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
    <>
      {orderData && (
        <Overlay className={open ? 'open' : ''} onClick={handleStatusOrder}>
          <Modal
            className={open ? 'open' : ''}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <Logo className="order" />
              <Button
                className="order-status"
                onClick={handleStatusOrder}
                type="button"
              >
                <CloseIcon />
              </Button>

              <p>
                № замовлення <OrderNumber>{orderData.orderNumber}</OrderNumber>
              </p>
            </ModalHeader>

            <ModalContent>
              <Name>{orderData.name}</Name>
              <Number>{orderData.phone}</Number>

              <List>
                <Item>
                  <StasusAccepted className="done" />
                  <p>Прийнято</p>
                </Item>
                <Item>
                  <StasusAtwork
                    className={orderData.status === 'accepted' ? '' : 'done'}
                  />
                  <p>Ремонтується</p>
                </Item>
                <Item>
                  <StasusDone
                    className={orderData.status === 'done' ? 'done' : ''}
                  />
                  <p>Готово</p>
                </Item>
              </List>

              <CommentBlock>
                <Comment>
                  Коментар: <span>{orderData.comment}</span>
                </Comment>
              </CommentBlock>
            </ModalContent>
          </Modal>
        </Overlay>
      )}
    </>
  );
}

export default OrderStatus;
