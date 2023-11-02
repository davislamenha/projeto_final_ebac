import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import restaurants from '../../data/mockData';
import ProductsList from '../../components/ProductsList';

const Profile = () => {
  const { id } = useParams();
  let restaurant = null;

  if (id) {
    restaurant = restaurants.find(
      ({ id: restaurantId }) => +id === restaurantId,
    );
  }

  return (
    <>
      <Header />
      {restaurant && (
        <>
          <Banner
            background={restaurant.image}
            cuisine={restaurant.cuisine}
            title={restaurant.title}
          />
          <ProductsList products={restaurant.products} />
        </>
      )}
    </>
  );
};

export default Profile;
