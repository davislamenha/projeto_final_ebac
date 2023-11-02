import RestaurantModel from '../../models/Restaurant';
import Restaurant from '../Restaurant';
import { Container } from './styles';

type RestaurantListProps = {
  restaurants: RestaurantModel[];
};

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  return (
    <Container className="container">
      {restaurants.map(
        ({ title, description, id, image, infos, rate, cuisine }) => {
          return (
            <Restaurant
              key={id}
              id={id}
              title={title}
              description={description}
              image={image}
              infos={infos}
              cuisine={cuisine}
              rate={rate}
            />
          );
        },
      )}
    </Container>
  );
};

export default RestaurantList;
