import appStyles from '../App/App.styled';
import Form from '../Form/Form';
import Section from '../Section/Section';
import ServicesList from '../ServicesList/ServicesList';
import Title from '../Title/Title';
import styles from './Hero.styled';

function Hero(): JSX.Element {
  const { ContentBlock, SubTitle } = styles;
  const { Container } = appStyles;

  return (
    <Section>
      <Container>
        <ContentBlock>
          <Title className="hero">
            <span>«ОкіМайстер»</span> надійний помічник у складну хвилину
          </Title>
          <SubTitle>Ремонт медичної техніки різної складності</SubTitle>

          <ServicesList />
          <Form />
        </ContentBlock>
      </Container>
    </Section>
  );
}

export default Hero;
