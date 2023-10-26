import styles from './Button.styled';

interface IProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | Promise<void>;
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

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
