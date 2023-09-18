import styles from './Title.styled';

interface IProps {
  text?: string | undefined;
}

function Title({ text }: IProps): JSX.Element {
  const { TitleStyled } = styles;

  return <TitleStyled>{text}</TitleStyled>;
}

Title.defaultProps = {
  text: '',
};

export default Title;
