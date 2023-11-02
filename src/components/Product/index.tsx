import { Card, Body, Title, Description, Button } from './styles';

type ProductProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Product = ({ title, description, image }: ProductProps) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button>Adicionar ao carrinho</Button>
      </Body>
    </Card>
  );
};

export default Product;
