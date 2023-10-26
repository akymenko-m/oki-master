import styled from '@emotion/styled';

const Item = styled.li`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.light};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const Text = styled.p`
  line-height: ${(props) => props.theme.lineHeight.xs};

  &.bold {
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

export default {
  Item,
  Text,
};
