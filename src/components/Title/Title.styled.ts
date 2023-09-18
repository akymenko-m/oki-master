import styled from '@emotion/styled';

const TitleStyled = styled.h2`
  margin-bottom: 18px;
  font-size: ${(props) => props.theme.fontSizes.mobile.large};
  font-weight: 500;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 25px;
    font-size: ${(props) => props.theme.fontSizes.desktop.xxl};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 20px;
    line-height: ${(props) => props.theme.lineHeight.xxl};
  }
`;

export default {
  TitleStyled,
};
