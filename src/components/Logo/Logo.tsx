import styles from './Logo.styled';

interface IProps {
  className?: string | undefined;
  href?: string;
}

function Logo({ className, href }: IProps): JSX.Element {
  const { StyledLogo, Link } = styles;

  return (
    <Link className={className} href={href}>
      <StyledLogo className={className} />
    </Link>
  );
}

Logo.defaultProps = {
  className: '',
  href: undefined,
};

export default Logo;
