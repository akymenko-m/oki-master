import styles from './NavList.styled';

interface IProps {
  className?: string | undefined;
  handleShowNavbar?: () => void;
}

function NavList({ className, handleShowNavbar }: IProps): JSX.Element {
  const { List, Item, StyledLink } = styles;

  return (
    <List className={className}>
      <Item className={className}>
        <StyledLink to="#about" onClick={handleShowNavbar}>
          Про нас
        </StyledLink>
      </Item>
      <Item className={className}>
        <StyledLink to="#services" onClick={handleShowNavbar}>
          Послуги
        </StyledLink>
      </Item>
      <Item className={className}>
        <StyledLink to="#gallery" onClick={handleShowNavbar}>
          Галерея
        </StyledLink>
      </Item>
      <Item className={className}>
        <StyledLink to="#reviews" onClick={handleShowNavbar}>
          Відгуки
        </StyledLink>
      </Item>
      <Item className={className}>
        <StyledLink to="#contacts" onClick={handleShowNavbar}>
          Контакти
        </StyledLink>
      </Item>
    </List>
  );
}

NavList.defaultProps = {
  className: '',
  handleShowNavbar: () => {},
};

export default NavList;
