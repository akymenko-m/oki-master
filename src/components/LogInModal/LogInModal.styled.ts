import styled from '@emotion/styled';

const Modal = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px 11px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.dark};

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 70px;
    width: 450px;
    padding: 24px 40px;
    gap: 18px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 150px;
    width: 600px;
    padding: 24px 60px;
    gap: 32px;
  }
`;

const Text = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.mobile.large};
  font-weight: 500;

  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.large};
    line-height: ${(props) => props.theme.lineHeight.large};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: ${(props) => props.theme.fontSizes.desktop.xxl};
  }
`;

export default { Modal, Text };
