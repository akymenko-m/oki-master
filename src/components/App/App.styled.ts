import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    max-width: ${(props) => props.theme.breakpoints.s};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: ${(props) => props.theme.breakpoints.m};
    padding-left: ${(props) => props.theme.spacing.step * 10}px;
    padding-right: ${(props) => props.theme.spacing.step * 10}px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: ${(props) => props.theme.breakpoints.l};
    padding-left: ${(props) => props.theme.spacing.step * 12}px;
    padding-right: ${(props) => props.theme.spacing.step * 12}px;
  }
`;

export default Container;
