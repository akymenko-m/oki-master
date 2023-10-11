import { useState } from 'react';
import LogInModal from '../../components/LogInModal/LogInModal';
import appStyles from '../../components/App/App.styled';

function AdminPage() {
  const { Container } = appStyles;

  const [isLogIn, setIsLogIn] = useState(false);

  const logIn = () => {
    setIsLogIn(!isLogIn);
  };

  return (
    <Container>
      {isLogIn ? <div>Admin page</div> : <LogInModal logIn={logIn} />}
    </Container>
  );
}

export default AdminPage;
