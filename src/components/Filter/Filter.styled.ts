import styled from '@emotion/styled';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

const FilterBlock = styled.div`
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    &.orders {
      display: none;
    }

    &.header {
      flex-grow: 1;
      & input {
        margin-bottom: 0;
      }
    }
  }
`;

const FilterInput = styled.input`
  margin-bottom: 18px;
  padding: 8px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors['light-20']};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors['light-20']};

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }

  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.dark};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.xs};
    line-height: 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 16px 8px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  fill: ${(props) => props.theme.colors.dark};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 20px;
    width: 20px;
    top: 10px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    height: 30px;
    width: 30px;
    top: 16px;
  }
`;

export default {
  FilterInput,
  StyledSearchIcon,
  FilterBlock,
};
