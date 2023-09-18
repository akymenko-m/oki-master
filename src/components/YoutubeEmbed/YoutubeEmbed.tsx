import styles from './YoutubeEmbed.styled';

function YoutubeEmbed(): JSX.Element {
  const { Container } = styles;

  return (
    <Container>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2EK6FGx16mo?si=FX1p_WD9YbV0YUdH"
        title="Заміна динаміка на слуховому приладі Rexton Arena HP з використанням ущільнювального клею K704"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Container>
  );
}

export default YoutubeEmbed;
