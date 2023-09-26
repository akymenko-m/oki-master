import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 40px;
  }
`;

const Text = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
  line-height: 30px;

  & .bold {
    font-weight: 500;
  }

  & svg {
    width: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 8px;
    font-size: ${(props) => props.theme.fontSizes.desktop.medium};

    & svg {
      width: 30px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    line-height: ${(props) => props.theme.lineHeight.xl};
  }
`;

export default { List, Text };
