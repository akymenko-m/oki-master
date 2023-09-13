import NavList from '../NavList/NavList';
import styles from './MobileMenu.styled';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';

interface IProps {
  handleShowNavbar: () => void;
  open: boolean;
}

function MobileMenu({ handleShowNavbar, open }: IProps): JSX.Element {
  const { Menu, CloseButton } = styles;

  return (
    <Menu className={open ? 'open' : ''}>
      <CloseButton
        type="button"
        onClick={handleShowNavbar}
        className={open ? 'open' : ''}
      >
        <CloseIcon />
      </CloseButton>

      <NavList className={open ? 'open' : ''} />
    </Menu>
  );
}

export default MobileMenu;
