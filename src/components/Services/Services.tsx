import appStyles from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import ServicesData from '../../data/services';
import ServicesCard from '../ServicesCard/ServicesCard';
import styles from './Services.styled';

function Services(): JSX.Element {
  const { List } = styles;
  const { Container } = appStyles;

  return (
    <Section>
      <div id="services">
        <Container>
          <Title>Послуги</Title>

          <List>
            {ServicesData.map((el) => (
              <ServicesCard key={el.id} data={el} />
            ))}
          </List>
        </Container>
      </div>
    </Section>
  );
}

export default Services;
