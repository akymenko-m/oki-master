import styled from '@emotion/styled';

const List = styled.ul`
  display: none;
  font-size: ${(props) => props.theme.fontSizes.mobile.medium};
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeight.large};

  &.footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: ${(props) => props.theme.fontSizes.mobile.xs};
    font-weight: 400;
    line-height: ${(props) => props.theme.lineHeight.medium};
  }

  &.open {
    display: flex;
    flex-direction: column;
    gap: 13px;
    text-align: end;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.header {
      display: flex;
      flex-direction: row;
      gap: 26px;
      justify-content: center;
      align-items: center;
      font-size: ${(props) => props.theme.fontSizes.desktop.medium};
      line-height: ${(props) => props.theme.lineHeight.xl};
    }

    &.footer {
      width: 125px;
      font-size: ${(props) => props.theme.fontSizes.desktop.small};
      line-height: 30px;
      gap: 20px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.header {
      gap: 30px;
      justify-content: flex-start;
    }

    &.footer {
      width: 146px;
    }
  }
`;

const Item = styled.li`
  &.footer:last-of-type {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &.footer:last-of-type {
      display: block;
    }
  }
`;

export default { List, Item };
