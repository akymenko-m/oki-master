import ServicesData from '../../data/services';
import ServiceItem from '../ServiceItem/ServiceItem';
import styles from './ServicesList.styled';

function ServicesList(): JSX.Element {
  const { List } = styles;

  return (
    <List>
      {ServicesData.map((el) => (
        <ServiceItem key={el.id} data={el} />
      ))}
    </List>
  );
}

export default ServicesList;
