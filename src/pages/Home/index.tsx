import restaurants from '../../data/mockData';

import Hero from '../../components/Hero';
import RestaurantList from '../../components/RestaurantsList';

const Home = () => {
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Home;
