import { ReactComponent as UserIcon } from '../../assets/user-icon.svg';
import styles from './ReviewCard.styled';

interface IProps {
  data: {
    name: string;
    review: string;
    date: string;
  };
}

function ReviewCard({ data }: IProps): JSX.Element {
  const { name, review, date } = data;

  const {
    Item,
    Card,
    Text,
    Name,
    StyledQuotesIcon,
    IconContainer,
    TextContainer,
  } = styles;

  return (
    <Item>
      <Card>
        <IconContainer>
          <StyledQuotesIcon />
        </IconContainer>

        <TextContainer>
          <Name>
            <UserIcon />
            <Text className="user">{name}</Text>
          </Name>

          <Text className="review">{review}</Text>
          <Text>{date}</Text>
        </TextContainer>
      </Card>
    </Item>
  );
}

export default ReviewCard;
