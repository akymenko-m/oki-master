import styles from './Title.styled';

interface IProps extends React.ComponentPropsWithoutRef<'h2'> {
  className?: string;
}

function Title({ className, children }: IProps): JSX.Element {
  const { TitleStyled } = styles;

  return <TitleStyled className={className}>{children}</TitleStyled>;
}

Title.defaultProps = {
  className: '',
};

export default Title;
