import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const InputBlock = styled.div`
  padding: 8px 0;
  display: flex;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.light};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputStatusBlock = styled.div`
  display: flex;
  gap: 5px;
`;

const Label = styled.label`
  min-width: 135px;
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeight.xs};

  &.status {
    min-width: 100px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const Input = styled.input`
  width: 150px;
  height: 24px;
  padding: 3px 5px;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 400;

  &:focus {
    outline: none;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const Checkbox = styled.input`
  &[type='radio'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${(props) => props.theme.colors.white};
    margin: 0;
    color: currentColor;
    width: 16px;
    height: 16px;
    border: 1px solid currentColor;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;

    &::before {
      content: '';
      width: 9px;
      height: 9px;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-color: ${(props) => props.theme.colors.accent};
      border: 1px solid ${(props) => props.theme.colors.accent};
    }

    &:checked::before {
      transform: scale(1);
    }

    &:hover,
    &:focus {
      -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;

const Text = styled.p`
  width: 135px;
  font-weight: 500;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

export default {
  Form,
  InputsContainer,
  InputBlock,
  Label,
  Input,
  Text,
  InputStatusBlock,
  InputsBlock,
  Checkbox,
};
