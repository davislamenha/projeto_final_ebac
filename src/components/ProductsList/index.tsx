import ProductModel from '../../models/Product';
import Product from '../Product';
import { Container } from './styles';

type ProductsListProps = {
  products: ProductModel[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <Container className="container">
      {products.map(({ title, description, id, image }) => {
        return (
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
          />
        );
      })}
    </Container>
  );
};

export default ProductsList;
