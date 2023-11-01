import Logo from '../Logo';
import instagram from '../../assets/images/instagram.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import { Container, Item, Link, SocialMediaList, Text } from './styles';

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <Logo />
        <SocialMediaList>
          <Item>
            <Link href="#">
              <img src={instagram} alt="instagram" />
            </Link>
          </Item>
          <Item>
            <Link href="#">
              <img src={facebook} alt="facebook" />
            </Link>
          </Item>
          <Item>
            <Link href="#">
              <img src={twitter} alt="twitter" />
            </Link>
          </Item>
        </SocialMediaList>
        <Text>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Text>
      </div>
    </Container>
  );
};

export default Footer;
