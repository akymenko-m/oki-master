import styles from './ServiceItem.styled';

interface IProps {
  data: {
    id: string;
    icon: string;
  };
}

function ServiceItem({ data }: IProps): JSX.Element {
  const { StyledLink, Image, Item } = styles;

  return (
    <Item>
      <StyledLink className="services" to={`#${data.id}`}>
        <Image src={data.icon} alt="jg" />
      </StyledLink>
    </Item>
  );
}

export default ServiceItem;
