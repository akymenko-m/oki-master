import { useState } from 'react';
import appStyles from '../App/App.styled';
import styles from './Header.styled';
import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header(): JSX.Element {
  const { HeaderWrapper, Burger, Navigation } = styles;
  const { Container } = appStyles;

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Navigation>
            <Logo className="header" />

            <NavList className="header" />
          </Navigation>

          <Burger type="button" onClick={handleShowNavbar}>
            <MenuIcon />
          </Burger>
        </HeaderWrapper>

        <MobileMenu open={showNavbar} handleShowNavbar={handleShowNavbar} />
      </Container>
    </header>
  );
}

export default Header;
