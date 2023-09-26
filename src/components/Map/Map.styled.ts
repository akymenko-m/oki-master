import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 18px;
  width: 290px;
  height: 143px;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 24px;
    width: 688px;
    height: 452px;
    border-radius: 24px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 0;
    width: 500px;
    height: 452px;
  }
`;

export default { Container };
