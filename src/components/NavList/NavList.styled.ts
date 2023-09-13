import styled from '@emotion/styled';

const List = styled.ul`
  display: none;
  font-size: ${(props) => props.theme.fontSizes.mobile.medium};
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeight.large};

  &.open {
    display: flex;
    flex-direction: column;
    gap: 13px;
    text-align: end;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: flex;
    flex-direction: row;
    gap: 26px;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};
    line-height: ${(props) => props.theme.lineHeight.xl};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 30px;
    justify-content: flex-start;
  }
`;

export default { List };
