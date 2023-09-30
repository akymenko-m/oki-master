import Container from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import styles from './Hero.styled';

function Hero(): JSX.Element {
  const { ContentBlock, SubTitle } = styles;

  return (
    <Section>
      <Container>
        <ContentBlock>
          <Title className="hero">
            <span>«ОкіМайстер»</span> надійний помічник у складну хвилину
          </Title>

          <SubTitle>Ремонт медичної техніки різної складності</SubTitle>
        </ContentBlock>
      </Container>
    </Section>
  );
}

export default Hero;
