import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 40px;

    &.footer {
      gap: 20px;
    }
  }
`;

const Text = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
  line-height: ${(props) => props.theme.lineHeight.medium};

  & .bold {
    font-weight: 500;
  }

  & svg {
    width: 20px;
  }

  &.contacts {
    fill: ${(props) => props.theme.colors.accent};
  }

  &.footer {
    font-size: ${(props) => props.theme.fontSizes.mobile.xs};
    fill: ${(props) => props.theme.colors.text};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 8px;
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};

    & svg {
      width: 30px;
    }

    &.footer {
      font-size: ${(props) => props.theme.fontSizes.desktop.small};
      line-height: 30px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    line-height: ${(props) => props.theme.lineHeight.xl};
  }
`;

export default { List, Text };
