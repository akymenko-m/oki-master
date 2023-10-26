import styled from '@emotion/styled';

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.white};
  /* margin: 0 auto; */
  /* margin-top: 50px; */
  /* padding: 20px 11px; */
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; */

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const MainBlock = styled.div`
  padding: 24px 0;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.mobile.small};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
  line-height: ${(props) => props.theme.lineHeight.xs};
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

const HeaderBlock = styled.div`
  margin-bottom: 9px;
  padding-bottom: 9px;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
  }
`;

export default { Modal, MainBlock, Title, HeaderBlock };
