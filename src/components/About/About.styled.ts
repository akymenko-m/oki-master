import styled from '@emotion/styled';

const Content = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: flex;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    justify-content: space-between;
  }
`;

const ImageBlock = styled.div`
  display: none;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: block;
  }
`;

const Overlay = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    top: 75px;
    left: -67px;
    z-index: -10;
    width: 350px;
    height: 430px;
    position: absolute;
    background-image: radial-gradient(
      circle,
      rgba(65, 169, 46, 0.4290966386554622) 0%,
      rgba(188, 234, 143, 0.583158263305322) 13%,
      rgba(255, 255, 255, 1) 65%
    );
    background-repeat: no-repeat;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    top: 63px;
    left: -55px;
    width: 400px;
    height: 450px;
    background-image: radial-gradient(
      circle,
      rgba(65, 169, 46, 0.4290966386554622) 0%,
      rgba(188, 234, 143, 0.583158263305322) 13%,
      rgba(255, 255, 255, 1) 70%
    );
  }
`;

const Image = styled.img`
  object-fit: contain;
  object-position: bottom;
  height: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    object-position: top;
  }
`;

const TextBlock = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 440px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 688px;
  }
`;

const Text = styled.p`
  margin-bottom: 16px;
  line-height: ${(props) => props.theme.lineHeight.xs};

  &:first-of-type {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.desktop.small};
    line-height: 24px;

    &:first-of-type {
      display: block;
      margin-bottom: 40px;
    }

    &:last-of-type {
      display: block;
      margin-bottom: 0;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 27px;
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    line-height: ${(props) => props.theme.lineHeight.large};

    &:first-of-type,
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default {
  Text,
  Overlay,
  Content,
  TextBlock,
  ImageBlock,
  Image,
};
