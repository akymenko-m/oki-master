import styles from './Button.styled';

interface IProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
  type: 'button' | 'submit';
}

function Button({ onClick, type, children, className }: IProps): JSX.Element {
  const { StyledButton } = styles;

  return (
    <StyledButton
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

export default Button;