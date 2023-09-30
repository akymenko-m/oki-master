import Container from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import styles from './About.styled';

function About(): JSX.Element {
  const { Text, Overlay, Content, TextBlock, ImageBlock, Image } = styles;

  return (
    <Section>
      <div id="about">
        <Container>
          <Content>
            <ImageBlock>
              <Overlay />

              <picture>
                <source
                  srcSet="/about/irrigator-tablet.png"
                  media="(max-width: 768px)"
                />
                <source
                  srcSet="/about/irrigator-desktop.png"
                  media="(min-width: 1280px)"
                />
                <Image src="/about/irrigator-tablet.png" alt="Іригатор" />
              </picture>
            </ImageBlock>

            <TextBlock>
              <Title className="about">
                Про <span className="accent">нас</span>
              </Title>

              <Text>
                Медтехніка має велике значення в повсякденному житті кожної
                людини. Тому важливо підтримувати її в справному стані, щоб
                будь-якої миті вона послужила вам, вірно визначила показники
                вашого здоров’я.
              </Text>
              <Text>
                <span className="accent">«ОкіМайстер»</span> з відповідальністю
                та гарантією на роботу виконає будь-який ремонт вашого приладу,
                надасть рекомендації з використання та догляду.
              </Text>
              <Text>
                Завдяки медичній техніці люди пильнують своє добре самопочуття
                та здоров’я, що є найголовнішим у житті, та інколи техніка
                ламається, і не завжди є можливість придбати нову, вона може
                дорого коштувати, і тут вам допоможе{' '}
                <span className="accent">«ОкіМайстер»</span>, який врятує вашу
                техніку!
              </Text>
            </TextBlock>
          </Content>
        </Container>
      </div>
    </Section>
  );
}

export default About;
