import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './Form.styled';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/hooks';
import { getOrder } from '../../redux/ordersOperations';
import { IItem } from '../../interfaces/admin/item.interface';

interface IProps {
  handleStatusOrder: () => void;
  setOrderData: React.Dispatch<React.SetStateAction<IItem | undefined>>;
}

function Form({ handleStatusOrder, setOrderData }: IProps): JSX.Element {
  const { StyledForm, Input, StyledArrow } = styles;

  const [formData, setFormData] = useState('');
  const dispatch = useAppDispatch();

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[0-9]+$/;
    let { value } = event.target;
    if (!pattern.test(value)) {
      value = value.replace(/[^0-9]/g, '');
    }
    setFormData(value);
  };

  const resetFormData = () => {
    setFormData('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleStatusOrder();

    dispatch(getOrder(formData))
      .unwrap()
      .then((response: IItem) => {
        setOrderData(response);
      })
      .catch((error) => {
        if (error) {
          toast.error('Не знайдено за вашим запитом');
        }
      });

    resetFormData();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Номер замовлення чи телефону"
        name="order"
        value={formData}
        required
        maxLength={10}
        minLength={10}
        onChange={inputChange}
      />
      <Button className="form" type="submit">
        <StyledArrow />
      </Button>
    </StyledForm>
  );
}

export default Form;
