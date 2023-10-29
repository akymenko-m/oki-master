import styled from '@emotion/styled';

const ButtonsBlock = styled.div`
  margin-top: 20px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 0 41px;
    flex-direction: row;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 0 19px 18px 19px;
  }
`;

export default { ButtonsBlock };
