import styled from '@emotion/styled';
import { ReactComponent as CheckIcon } from '../../assets/check-icon.svg';

const Subtitle = styled.h3`
  margin-bottom: 18px;
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.colors.accent};

  display: ${(props) =>
    props.className?.includes('mobile') ? 'block' : 'none'};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: ${(props) =>
      props.className?.includes('mobile') ? 'none' : 'block'};
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    text-align: start;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.large};
    line-height: ${(props) => props.theme.lineHeight.xl};
  }
`;

const Item = styled.li`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &:nth-of-type(2n) > div {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 10px 0;
  }
`;

const Card = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: flex;
    gap: 13px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 33px;
  }
`;

const ImageBlock = styled.div`
  margin-bottom: 18px;
  overflow: hidden;
  border-radius: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 0;
    min-width: 309px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    min-width: 408px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const Container = styled.div`
  position: relative;
`;

const DetailsContainer = styled.div`
  padding-top: 39px;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0;
  z-index: -1;
  transition: opacity 500ms ease-in-out;

  &.active {
    opacity: 1;
    z-index: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 39px 5px 0 5px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 133px 16px 0 16px;
  }
`;

const DetailsBlock = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: row;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 26px;
  }
`;

const Details = styled.p`
  line-height: ${(props) => props.theme.lineHeight.xs};

  & span {
    font-weight: 600;
    color: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    line-height: 26px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    line-height: ${(props) => props.theme.lineHeight.large};
  }
`;

const Content = styled.div`
  padding-bottom: 2px;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 10px 49px 10px 10px;
  }
`;

const FeaturesList = styled.ul`
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 20px;
    gap: 12px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 18px;
    gap: 18px;
  }
`;

const FeaturesItem = styled.li`
  display: flex;
  gap: 4px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 10px;
  }
`;

const Text = styled.p`
  line-height: ${(props) => props.theme.lineHeight.xs};

  & span {
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    line-height: 26px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    line-height: ${(props) => props.theme.lineHeight.xl};
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 24px;
  fill: ${(props) => props.theme.colors.accent};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 48px;
  }
`;

const IconBlock = styled.div`
  min-width: 50px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    min-width: 70px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    min-width: 132px;
  }
`;

export default {
  Subtitle,
  Item,
  ImageBlock,
  Card,
  Content,
  FeaturesList,
  FeaturesItem,
  Text,
  StyledCheckIcon,
  Container,
  DetailsContainer,
  Details,
  IconBlock,
  DetailsBlock,
};
