import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import styles from './OrderForm.styled';
import generateUniqueOrderNumber from '../../helpers/generateUniqueOrderNumber';
import orderStatus from '../../data/orderStatus';
import { addOrder, updateOrder } from '../../redux/ordersOperations';
import { useAppDispatch } from '../../hooks/hooks';
import { IItem } from '../../interfaces/admin/item.interface';
import preventAllowSumbols from '../../helpers/preventAllowSumbols';

interface IProps {
  createNewOrder?: () => void;
  currentOrder?: IItem | null;
  toggleOrderDetails?: () => void;
  isArchived: boolean;
  className?: string;
}

function OrderForm({
  createNewOrder,
  currentOrder,
  toggleOrderDetails,
  isArchived,
  className,
}: IProps): JSX.Element {
  const {
    Form,
    InputsContainer,
    InputBlock,
    Label,
    Input,
    Text,
    InputStatusBlock,
    InputsBlock,
    Checkbox,
  } = styles;

  const dispatch = useAppDispatch();

  const uniqueNumber = generateUniqueOrderNumber();
  const currentDate = new Date().toLocaleDateString('en-CA');

  const [formData, setFormData] = useState({
    orderNumber: currentOrder?.orderNumber
      ? currentOrder.orderNumber
      : uniqueNumber,
    date: currentOrder?.date
      ? new Date(currentOrder.date).toLocaleDateString('en-CA')
      : currentDate,
    name: currentOrder?.name ? currentOrder.name : '',
    phone: currentOrder?.phone ? currentOrder.phone : '',
    repairType: currentOrder?.repairType ? currentOrder.repairType : '',
    price: currentOrder?.price ? currentOrder.price : undefined,
    completeSet: currentOrder?.completeSet ? currentOrder.completeSet : '',
    comment: currentOrder?.comment ? currentOrder.comment : '',
    status: currentOrder?.status ? currentOrder.status : undefined,
  });

  const preventInvalidInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = /^[a-zA-Zа-яА-Я]+$/;
    const { value } = e.currentTarget;
    const { key } = e;
    const trimmedValue = value.trim();
    const hasLetters = pattern.test(key);
    const hasSpaces = key === ' ';
    const hasNumbers = /\d/.test(key);

    if (!hasLetters && !hasSpaces && !hasNumbers) {
      e.preventDefault();
    }

    if (trimmedValue.length === 0 && (key === ' ' || hasNumbers)) {
      e.preventDefault();
    }
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    const inputName = event.target.name;
    const pattern = /^[0-9]+$/;

    if (inputName === 'phone' || inputName === 'price') {
      if (!pattern.test(inputValue)) {
        inputValue = inputValue.replace(/[^0-9]/g, '');
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formattedFormData = {
      ...formData,
      date: new Date(formData.date),
    };

    if (!currentOrder && createNewOrder) {
      dispatch(addOrder(formData))
        .unwrap()
        .then(() => {
          toast.success('Замовлення створене успішно');
          createNewOrder();
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error('Неправильно заповнені поля форми');
          } else {
            toast.error('Сталася помилка. Спробуйте пізніше');
          }
        });
    } else if (currentOrder && toggleOrderDetails) {
      dispatch(
        updateOrder({
          formattedFormData,
          orderId: currentOrder._id!,
        })
      )
        .unwrap()
        .then(() => {
          toast.success('Замовлення оновлене успішно');
          toggleOrderDetails();
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error('Неправильно заповнені поля форми');
          } else {
            toast.error('Сталася помилка. Спробуйте пізніше');
          }
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <InputsContainer>
        <InputBlock>
          <Label htmlFor="orderNumber">№ замовлення</Label>
          <Input
            readOnly
            type="text"
            name="orderNumber"
            id="orderNumber"
            value={formData.orderNumber}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="date">Дата</Label>
          <Input
            type="date"
            name="date"
            id="date"
            onChange={inputChange}
            required
            value={formData.date}
            readOnly={!!isArchived}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="name">Ім’я</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onKeyDown={preventInvalidInput}
            onChange={inputChange}
            required
            value={formData.name}
            readOnly={!!isArchived}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="phone">Номер телефону</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            minLength={10}
            maxLength={10}
            onChange={inputChange}
            readOnly={!!isArchived}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="repairType">Вид ремонту</Label>
          <Input
            type="text"
            name="repairType"
            id="repairType"
            onChange={inputChange}
            required
            value={formData.repairType}
            readOnly={!!isArchived}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="completeSet">Комплектація</Label>
          <Input
            type="text"
            name="completeSet"
            id="completeSet"
            onChange={inputChange}
            value={formData.completeSet}
            readOnly={!!isArchived}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="price">Ціна,₴</Label>
          <Input
            type="number"
            name="price"
            id="price"
            onKeyDown={preventAllowSumbols}
            onChange={inputChange}
            required
            min={1}
            value={formData.price}
            readOnly={!!isArchived}
            onWheel={(e) => (e.target as HTMLElement).blur()}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="comment">Коментар</Label>
          <Input
            type="text"
            name="comment"
            id="comment"
            onChange={inputChange}
            value={formData.comment}
            readOnly={!!isArchived}
          />
        </InputBlock>

        <InputBlock>
          <Text>Статус замовлення</Text>

          <InputsBlock>
            {orderStatus.map((el) => (
              <InputStatusBlock className="status" key={el.status}>
                <Checkbox
                  onChange={inputChange}
                  type="radio"
                  name="status"
                  id={el.status}
                  value={el.status}
                  required
                  checked={formData.status === el.status}
                />
                <Label className="status" htmlFor={el.status}>
                  {el.name}
                </Label>
              </InputStatusBlock>
            ))}
          </InputsBlock>
        </InputBlock>
      </InputsContainer>

      {!isArchived && (
        <Button type="submit" className="order-form">
          Зберегти дані
        </Button>
      )}
    </Form>
  );
}

OrderForm.defaultProps = {
  createNewOrder: () => {},
  currentOrder: undefined,
  toggleOrderDetails: () => {},
  className: '',
};

export default OrderForm;
