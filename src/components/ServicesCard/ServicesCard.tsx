/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import Button from '../Button/Button';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import styles from './ServicesCard.styled';

interface IProps {
  data: {
    id: string;
    title: string;
    images: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    features: Array<{
      title: string;
      text: string;
    }>;
    description: {
      title: string;
      icon: React.FC<React.SVGProps<SVGSVGElement>>;
      text: string;
    };
  };
}

function ServicesCard({ data }: IProps): JSX.Element {
  const { title, images, description, features, id } = data;
  const {
    Subtitle,
    Item,
    ImageBlock,
    Card,
    FeaturesList,
    FeaturesItem,
    Text,
    StyledCheckIcon,
    Content,
    Container,
    DetailsContainer,
    Details,
    IconBlock,
    DetailsBlock,
  } = styles;

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Item>
      <div id={id}>
        <Card>
          <Subtitle className="mobile">{title}</Subtitle>

          <div>
            <ImageBlock>
              <picture>
                <source srcSet={images.mobile} media="(max-width: 767px)" />
                <source srcSet={images.tablet} media="(max-width: 1279px)" />
                <source srcSet={images.desktop} media="(min-width: 1280px)" />
                <img src={images.mobile} alt="Тонометр" />
              </picture>
            </ImageBlock>
          </div>

          <Container>
            <Content>
              <Subtitle>{title}</Subtitle>

              <FeaturesList>
                {features.map((el) => (
                  <FeaturesItem key={el.title}>
                    <div>
                      <StyledCheckIcon />
                    </div>

                    <Text>
                      <span>{el.title}</span> {el.text}
                    </Text>
                  </FeaturesItem>
                ))}
              </FeaturesList>

              <Button className="general" onClick={handleClick} type="button">
                Детальніше про прилад
              </Button>
            </Content>

            <DetailsContainer className={showDetails ? 'active' : ''}>
              <Button className="features" onClick={handleClick} type="button">
                <CloseIcon />
              </Button>

              <DetailsBlock>
                <IconBlock>
                  <description.icon />
                </IconBlock>

                <Details>
                  <span>{description.title}</span> {description.text}
                </Details>
              </DetailsBlock>
            </DetailsContainer>
          </Container>
        </Card>
      </div>
    </Item>
  );
}

export default ServicesCard;
