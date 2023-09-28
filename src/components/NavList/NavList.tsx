import { Link } from 'react-router-dom';
import styles from './NavList.styled';

interface IProps {
  className?: string | undefined;
}

function NavList({ className }: IProps): JSX.Element {
  const { List, Item } = styles;

  return (
    <List className={className}>
      <Item className={className}>
        <Link to="#about">Про нас</Link>
      </Item>
      <Item className={className}>
        <Link to="#services">Послуги</Link>
      </Item>
      <Item className={className}>
        <Link to="#gallery">Галерея</Link>
      </Item>
      <Item className={className}>
        <Link to="#reviews">Відгуки</Link>
      </Item>
      <Item className={className}>
        <Link to="#contacts">Контакти</Link>
      </Item>
    </List>
  );
}

NavList.defaultProps = {
  className: '',
};

export default NavList;
