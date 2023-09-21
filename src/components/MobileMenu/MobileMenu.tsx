/** @jsx jsx */
import { jsx } from '@emotion/react';
import NavList from '../NavList/NavList';
import styles from './MobileMenu.styled';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import Button from '../Button/Button';
import buttonStyles from '../Button/Button.styled';

interface IProps {
  handleShowNavbar: () => void;
  open: boolean;
}

function MobileMenu({ handleShowNavbar, open }: IProps): JSX.Element {
  const { Menu } = styles;
  const { mobileMenu } = buttonStyles;

  return (
    <Menu className={open ? 'open' : ''}>
      <Button
        css={[mobileMenu]}
        className={open ? 'open' : 'none'}
        onClick={handleShowNavbar}
        type="button"
      >
        <CloseIcon />
      </Button>

      <NavList className={open ? 'open' : ''} />
    </Menu>
  );
}

export default MobileMenu;
