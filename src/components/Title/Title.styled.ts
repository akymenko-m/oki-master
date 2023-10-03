import styled from '@emotion/styled';

const TitleStyled = styled.h2`
  margin-bottom: 18px;
  font-size: ${(props) => props.theme.fontSizes.mobile.large};
  font-weight: 500;
  text-align: center;

  &.hero {
    margin-bottom: 12px;
    font-size: ${(props) => props.theme.fontSizes.mobile.xl};
    font-weight: 400;
    line-height: 34px;
    text-align: start;

    & span {
      font-weight: 600;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 25px;
    font-size: ${(props) => props.theme.fontSizes.desktop.xxl};

    &.about {
      text-align: start;
    }

    &.hero {
      margin-bottom: 32px;
      font-size: 50px;
      font-weight: 500;
      line-height: ${(props) => props.theme.lineHeight.xxl};
      text-align: center;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 20px;
    line-height: ${(props) => props.theme.lineHeight.xxl};

    &.hero {
      margin-bottom: 0;
      max-width: 470px;
      font-size: ${(props) => props.theme.fontSizes.desktop.xxl};
      line-height: ${(props) => props.theme.lineHeight.xxl};
      text-align: start;
    }
  }
`;

export default {
  TitleStyled,
};
