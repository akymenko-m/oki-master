import { useState } from 'react';

import styles from './Form.styled';
import Button from '../Button/Button';

function Form(): JSX.Element {
  const { StyledForm, Input, StyledArrow } = styles;

  const [formData, setFormData] = useState('');

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value);
  };

  const resetFormData = () => {
    setFormData('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetFormData();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Введіть номер замовлення"
        name="order"
        value={formData}
        required
        onChange={inputChange}
      />
      <Button className="form" type="submit">
        <StyledArrow />
      </Button>
    </StyledForm>
  );
}

export default Form;
