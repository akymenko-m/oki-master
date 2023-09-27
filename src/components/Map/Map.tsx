import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import styles from './Map.styled';
import defaultTheme from './Map.theme';
import defaultPosition from '../../data/location';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

interface IProps {
  center: {
    lat: number;
    lng: number;
  };
  mapUrl: string;
}

function Map({ center, mapUrl }: IProps): JSX.Element {
  const { Container } = styles;

  const [toggleWindow, setToggleWindow] = useState(true);

  const mapRef = useRef<google.maps.Map | undefined>(undefined);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = undefined;
  }, []);

  const handleMapClick = useCallback(() => {
    window.open(mapUrl, '_blank');
  }, [mapUrl]);

  return (
    <Container>
      <GoogleMap
        onClick={handleMapClick}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17.2}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <MarkerF
          onClick={() => setToggleWindow(!toggleWindow)}
          position={defaultPosition}
          icon={{
            scale: 7,
            url: '/location.svg',
          }}
        >
          {toggleWindow && (
            <InfoWindowF
              position={defaultPosition}
              onCloseClick={() => setToggleWindow(!toggleWindow)}
            >
              <div>
                <p>
                  <b>Проспект О.Поля, 59</b>
                </p>
                <p>Медтехніка</p>
              </div>
            </InfoWindowF>
          )}
        </MarkerF>
      </GoogleMap>
    </Container>
  );
}

export default Map;
