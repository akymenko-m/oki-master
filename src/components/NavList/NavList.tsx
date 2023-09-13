import styles from './NavList.styled';

interface IProps {
  className?: string | undefined;
}

function NavList({ className }: IProps): JSX.Element {
  const { List } = styles;

  return (
    <List className={className}>
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
    </List>
  );
}

NavList.defaultProps = {
  className: '',
};

export default NavList;
