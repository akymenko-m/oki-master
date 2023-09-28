import styled from '@emotion/styled';

const Section = styled.footer`
  padding-top: 8px;
  background-color: ${(props) => props.theme.colors.light};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 48px 0 19px 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 20px 0 37px 0;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    gap: 16px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 124px;
  }
`;

const ContentBlock = styled.div`
  display: flex;
  gap: 15px;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    gap: 16px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 124px;
  }
`;

export default { Section, ContentBlock, FooterContainer };
