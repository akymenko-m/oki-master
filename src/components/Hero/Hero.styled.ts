import styled from '@emotion/styled';

const ContentBlock = styled.div`
  padding-top: 18px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding-top: 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 48px;
    padding-bottom: 167px;
    position: relative;
  }
`;

const SubTitle = styled.h1`
  margin-bottom: 20px;
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 7px;
    font-size: ${(props) => props.theme.fontSizes.desktop.large};
    line-height: ${(props) => props.theme.lineHeight.xxl};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 48px;
    font-size: ${(props) => props.theme.fontSizes.desktop.xl};
  }
`;

export default { ContentBlock, SubTitle };
