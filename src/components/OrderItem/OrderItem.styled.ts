import styled from '@emotion/styled';

const Item = styled.li`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.light};
  cursor: pointer;

  & p:nth-of-type(n + 4) {
    display: none;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  &:active {
    border: 1px solid ${(props) => props.theme.colors.accent};
  }

  &.header {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 21px 8px;
    flex-direction: row;
    justify-content: space-between;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.light};

    & p:nth-of-type(n) {
      display: block;
    }

    & p:nth-of-type(n + 6) {
      display: none;
    }

    &.header {
      display: flex;
    }

    &.bold {
      font-weight: 600;
    }

    &:hover,
    &:focus {
      box-shadow: none;
      border-bottom: 2px solid ${(props) => props.theme.colors.accent};
    }

    &:active {
      border: none;
      border-bottom: 2px solid ${(props) => props.theme.colors.dark};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    & p:nth-of-type(n) {
      display: block;
    }
  }
`;

const Text = styled.p`
  line-height: ${(props) => props.theme.lineHeight.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.bold {
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.xs};
    line-height: 30px;

    &:first-of-type {
      width: 145px;
    }

    &:nth-of-type(2) {
      width: 110px;
    }

    &:nth-of-type(3) {
      width: 130px;
    }

    &:nth-of-type(4) {
      width: 100px;
    }

    &:nth-of-type(4) {
      width: 100px;
    }

    &:nth-of-type(5) {
      width: 100px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    &:nth-of-type(6) {
      width: 130px;
    }
    &:nth-of-type(7) {
      width: 130px;
    }
    &:nth-of-type(8) {
      width: 130px;
    }
  }
`;

const Title = styled.span`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

export default {
  Item,
  Text,
  Title,
};
