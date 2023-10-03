import appStyles from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

function Process(): JSX.Element {
  const { Container } = appStyles;

  return (
    <Section>
      <Container>
        <Title>Процес</Title>

        <YoutubeEmbed />
      </Container>
    </Section>
  );
}

export default Process;
