import styles from './Logo.styled';

interface IProps {
  className?: string | undefined;
}

function Logo({ className }: IProps): JSX.Element {
  const { StyledLogo, Link } = styles;

  return (
    <Link href="/">
      <StyledLogo className={className} />
    </Link>
  );
}

Logo.defaultProps = {
  className: '',
};

export default Logo;
