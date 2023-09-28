import Container from '../App/App.styled';
import Section from '../Section/Section';
import Title from '../Title/Title';
import ServicesData from '../../data/services';
import ServicesCard from '../ServicesCard/ServicesCard';
import styles from './Services.styled';

function Services(): JSX.Element {
  const { List } = styles;

  return (
    <Section>
      <div id="services">
        <Container>
          <Title text="Послуги" />

          <List>
            {ServicesData.map((el) => (
              <ServicesCard key={el.title} data={el} />
            ))}
          </List>
        </Container>
      </div>
    </Section>
  );
}

export default Services;
