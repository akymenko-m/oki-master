import styles from './Logo.styled';

function Logo(): JSX.Element {
  const { StyledLogo } = styles;

  return (
    <a href="/">
      <StyledLogo />
    </a>
  );
}

export default Logo;
