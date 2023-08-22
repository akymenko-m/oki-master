// import { useTheme } from '@emotion/react';

import Container from '../App/App.styled';
import styles from './Header.styled';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

function Header(): JSX.Element {
  const { NavList, HeaderWrapper } = styles;
  //   const theme = useTheme();

  return (
    <header>
      <Container>
        <HeaderWrapper>
          <nav>
            <NavList>
              <li>
                <a href="/">
                  {/* <Logo /> */}
                  <ReactLogo />
                </a>
              </li>
              <li>
                <a href="/">Про нас</a>
              </li>
              <li>
                <a href="/">Послуги</a>
              </li>
              <li>
                <a href="/">Галерея</a>
              </li>
              <li>
                <a href="/">Відгуки</a>
              </li>
              <li>
                <a href="/">Контакти</a>
              </li>
            </NavList>
          </nav>
        </HeaderWrapper>
      </Container>
    </header>
  );
}

export default Header;
