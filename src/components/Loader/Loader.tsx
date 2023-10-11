import { Oval } from 'react-loader-spinner';
import styles from './Loader.styled';

function Loader(): JSX.Element {
  const { Overlay } = styles;

  return (
    <Overlay>
      <Oval
        height={80}
        width={80}
        color="#41A92E"
        wrapperStyle={{}}
        wrapperClass=""
        visible
        ariaLabel="oval-loading"
        secondaryColor="#41A92E"
        strokeWidth={4}
        strokeWidthSecondary={3}
      />
    </Overlay>
  );
}

export default Loader;
