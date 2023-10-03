import Address from '../Address/Address';
import appStyles from '../App/App.styled';
import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import styles from './Footer.styled';
import AddressData from '../../data/address';

function Footer(): JSX.Element {
  const { Section, ContentBlock, FooterContainer } = styles;
  const { Container } = appStyles;

  return (
    <Section>
      <Container>
        <FooterContainer>
          <Logo className="footer" />

          <ContentBlock>
            <NavList className="footer" />
            <Address className="footer" location={AddressData.location} />
          </ContentBlock>
        </FooterContainer>
      </Container>
    </Section>
  );
}

export default Footer;
