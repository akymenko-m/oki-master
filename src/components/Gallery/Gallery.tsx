import Container from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import styles from './Gallery.styled';
import ImagesData from '../../data/images';

function Gallery(): JSX.Element {
  const { GalleryContainer, Item, Image } = styles;

  return (
    <Section>
      <div id="gallery">
        <Container>
          <Title>Галерея</Title>

          <GalleryContainer>
            {ImagesData.map((el) => (
              <Item key={el.id}>
                <picture>
                  <source srcSet={el.desktop} media="(min-width: 1280px)" />
                  <source srcSet={el.tablet} media="(min-width: 768px)" />
                  <source srcSet={el.mobile} media="(max-width: 767px)" />

                  <Image src={el.mobile} alt="Приклад робіт" />
                </picture>
              </Item>
            ))}
          </GalleryContainer>
        </Container>
      </div>
    </Section>
  );
}

export default Gallery;
