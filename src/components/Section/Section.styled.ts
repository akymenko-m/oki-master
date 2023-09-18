import styled from '@emotion/styled';

const SectionStyled = styled.section`
  margin-bottom: 56px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 48px;
  }
`;

export default {
  SectionStyled,
};
