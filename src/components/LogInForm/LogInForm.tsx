import { useState } from 'react';
import Button from '../Button/Button';
import styles from './LogInForm.styled';

const LOGIN_PASSWORD = process.env.LOGIN_PASSWORD!;

interface IProps {
  logIn: () => void;
}

function LogInForm({ logIn }: IProps): JSX.Element {
  const { Form, Input, StyledCheckIcon, Warning } = styles;

  const [inputData, setInputData] = useState('');
  const [error, setError] = useState(false);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const resetFormData = () => {
    setInputData('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (LOGIN_PASSWORD === inputData) {
      setError(false);
      logIn();
    } else {
      setError(true);
    }

    resetFormData();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Пароль"
        value={inputData}
        required
        onChange={inputChange}
      />
      <StyledCheckIcon className={inputData ? 'focus' : ''} />

      <Warning className={error ? 'error' : ''}>Невірний пароль</Warning>

      <Button className="login" type="submit">
        Увійти
      </Button>
    </Form>
  );
}

export default LogInForm;
