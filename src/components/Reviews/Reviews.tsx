import Container from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import ReviewsData from '../../data/reviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import styles from './Reviews.styled';

function Reviews(): JSX.Element {
  const { List } = styles;

  return (
    <Section>
      <div id="reviews">
        <Container>
          <Title>Відгуки</Title>

          <List>
            {ReviewsData.map((el) => (
              <ReviewCard key={el.date} data={el} />
            ))}
          </List>
        </Container>
      </div>
    </Section>
  );
}

export default Reviews;
