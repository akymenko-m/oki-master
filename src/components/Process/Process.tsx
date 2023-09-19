import Container from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

function Process(): JSX.Element {
  return (
    <Section>
      <Container>
        <Title text="Процес" />

        <YoutubeEmbed />
      </Container>
    </Section>
  );
}

export default Process;
