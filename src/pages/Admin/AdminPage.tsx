import { useState } from 'react';
import LogInModal from '../../components/LogInModal/LogInModal';
import appStyles from '../../components/App/App.styled';
import storage from '../../helpers/storage';

function AdminPage() {
  const { Container } = appStyles;

  const [isLogIn, setIsLogIn] = useState(storage.load('login') ?? false);

  const logIn = () => {
    setIsLogIn(!isLogIn);
    storage.save('login', !isLogIn);
  };

  return (
    <Container>
      {isLogIn ? <div>Admin page</div> : <LogInModal logIn={logIn} />}
    </Container>
  );
}

export default AdminPage;
