import Logo from '../Logo';
import { HeroBackground, Title } from './styles';

const Hero = () => {
  return (
    <HeroBackground>
      <div className="container">
        <Logo />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </div>
    </HeroBackground>
  );
};

export default Hero;
