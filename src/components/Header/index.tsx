import Logo from '../Logo';
import { Cart, Container, MenuLink } from './styles';

const Header = () => {
  return (
    <Container>
      <div className="container">
        <ul>
          <li>
            <MenuLink to="/">Restaurantes</MenuLink>
          </li>
        </ul>
        <Logo />
        <Cart href="">0 produto(s) no carrinho</Cart>
      </div>
    </Container>
  );
};

export default Header;
