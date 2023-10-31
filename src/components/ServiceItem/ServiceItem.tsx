import styles from './ServiceItem.styled';

interface IProps {
  data: {
    id: string;
    icon: string;
    description: {
      title: string;
    };
  };
}

function ServiceItem({ data }: IProps): JSX.Element {
  const { StyledLink, Image, Item } = styles;

  return (
    <Item>
      <StyledLink className="services" to={`#${data.id}`}>
        <Image src={data.icon} alt={data.description.title} />
      </StyledLink>
    </Item>
  );
}

export default ServiceItem;
