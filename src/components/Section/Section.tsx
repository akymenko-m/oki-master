import styles from './Section.styled';

interface IProps extends React.ComponentPropsWithoutRef<'section'> {}

function Section({ children }: IProps): JSX.Element {
  const { SectionStyled } = styles;

  return <SectionStyled>{children}</SectionStyled>;
}

export default Section;
