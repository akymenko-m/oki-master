import { useEffect, useState } from 'react';
import appStyles from '../App/App.styled';
import styles from './Header.styled';
import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header(): JSX.Element {
  const { HeaderWrapper, Burger, Navigation, Overlay } = styles;
  const { Container } = appStyles;

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showNavbar]);

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
      </Container>

      {showNavbar && <Overlay onClick={handleShowNavbar} />}
      <MobileMenu open={showNavbar} handleShowNavbar={handleShowNavbar} />
    </header>
  );
}

export default Header;
