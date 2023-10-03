import { useJsApiLoader } from '@react-google-maps/api';
import Address from '../Address/Address';
import appStyles from '../App/App.styled';
import Map from '../Map/Map';
import Section from '../Section/Section';
import Title from '../Title/Title';
import styles from './Contacts.styled';
import AddressData from '../../data/address';

const defaultCenter = {
  lat: 48.4570111,
  lng: 35.0253241,
};

interface IProps {
  apiKey: string;
  mapUrl: string;
}

function Contacts({ apiKey, mapUrl }: IProps): JSX.Element {
  const { ContentBlock } = styles;
  const { Container } = appStyles;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <Section>
      <div id="contacts">
        <Container>
          <Title>Контакти</Title>

          <ContentBlock>
            {isLoaded ? (
              <Map mapUrl={mapUrl} center={defaultCenter} />
            ) : (
              <h2>Loading...</h2>
            )}

            <Address className="contacts" location={AddressData.locationFull} />
          </ContentBlock>
        </Container>
      </div>
    </Section>
  );
}

export default Contacts;
