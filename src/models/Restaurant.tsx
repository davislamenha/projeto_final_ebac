import ProductModel from './Product';

class RestaurantModel {
  id: number;
  title: string;
  description: string;
  infos?: string[];
  cuisine: string;
  rate: number;
  image: string;
  products: ProductModel[];

  constructor(
    id: number,
    title: string,
    description: string,
    cuisine: string,
    rate: number,
    image: string,
    products: ProductModel[],
    infos?: string[],
  ) {
    this.id = id;
    this.title = title;
    this.infos = infos;
    this.cuisine = cuisine;
    this.description = description;
    this.rate = rate;
    this.image = image;
    this.products = products;
  }
}

export default RestaurantModel;
