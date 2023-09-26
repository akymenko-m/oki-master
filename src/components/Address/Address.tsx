import styles from './Address.styled';
import { ReactComponent as LocationIcon } from '../../assets/location-icon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg';
import { ReactComponent as ClockIcon } from '../../assets/clock-icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone-icon.svg';

function Address(): JSX.Element {
  const { Text, List } = styles;

  return (
    <div>
      <address>
        <List>
          <li>
            <Text
              href="https://maps.app.goo.gl/nFDaPGjyWNFy15iF8"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LocationIcon />
              <span className="bold">Адреса:</span> просп. Олександра Поля, 59
            </Text>
          </li>
          <li>
            <Text href="tel:+380987397280">
              <PhoneIcon />
              <span className="bold">Телефон:</span> +38(097) 7397280
            </Text>
          </li>
          <li>
            <Text>
              <CalendarIcon />
              <span className="bold">Дні роботи:</span> пн-пт
            </Text>
          </li>
          <li>
            <Text>
              <ClockIcon />
              <span className="bold">Години роботи:</span> 10:00 – 18:00
            </Text>
          </li>
        </List>
      </address>
    </div>
  );
}

export default Address;
