import { Container, Cuisine, Title } from './styles';

export type BannerProps = {
  background: string;
  title: string;
  cuisine: string;
};

const Banner = ({ background, cuisine, title }: BannerProps) => {
  return (
    <Container background={background}>
      <div className="overlay">
        <div className="container">
          <Cuisine>{cuisine}</Cuisine>
          <Title>{title}</Title>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
