import styles from './Address.styled';
import { ReactComponent as LocationIcon } from '../../assets/location-icon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg';
import { ReactComponent as ClockIcon } from '../../assets/clock-icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';
import AddressData from '../../data/address';

interface IProps {
  location: string;
  className?: string;
}

function Address({ location, className }: IProps): JSX.Element {
  const { Text, List } = styles;

  return (
    <div>
      <address>
        <List className={className}>
          <li>
            <Text
              className={className}
              href="https://maps.app.goo.gl/nFDaPGjyWNFy15iF8"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LocationIcon />
              <span className="bold">Адреса:</span> {location}
            </Text>
          </li>
          <li>
            <Text className={className} href="tel:+380987397280">
              <PhoneIcon />
              <span className="bold">Телефон:</span> {AddressData.phone}
            </Text>
          </li>
          <li>
            <Text className={className}>
              <CalendarIcon />
              <span className="bold">Дні роботи:</span> {AddressData.workDays}
            </Text>
          </li>
          <li>
            <Text className={className}>
              <ClockIcon />
              <span className="bold">Години роботи:</span>{' '}
              {AddressData.workHours}
            </Text>
          </li>
        </List>
      </address>
    </div>
  );
}

Address.defaultProps = {
  className: '',
};

export default Address;
