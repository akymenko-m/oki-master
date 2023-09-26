import styled from '@emotion/styled';

const ContentBlock = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-bottom: 92px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export default { ContentBlock };
