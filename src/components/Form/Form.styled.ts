import styled from '@emotion/styled';
import { ReactComponent as Arrow } from '../../assets/arrow-right-icon.svg';

const StyledForm = styled.form`
  position: relative;
`;

const Input = styled.input`
  height: 32px;
  padding: 7px 8px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 400;

  &::placeholder {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 66px;
    padding: 18px 32px;
    font-size: ${(props) => props.theme.fontSizes.desktop.small};
    line-height: ${(props) => props.theme.lineHeight.small};
    border: 2px solid ${(props) => props.theme.colors.dark};

    &::placeholder {
      font-size: ${(props) => props.theme.fontSizes.desktop.small};
      line-height: ${(props) => props.theme.lineHeight.small};
    }
  }
`;

const StyledArrow = styled(Arrow)`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 44px;
    height: 44px;
  }
`;

export default { StyledForm, Input, StyledArrow };
