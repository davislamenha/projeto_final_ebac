class RestaurantModel {
  id: number;
  title: string;
  description: string;
  infos: string[];
  rate: number;
  image: string;

  constructor(
    id: number,
    title: string,
    description: string,
    infos: string[],
    rate: number,
    image: string,
  ) {
    this.id = id;
    this.title = title;
    this.infos = infos;
    this.description = description;
    this.rate = rate;
    this.image = image;
  }
}

export default RestaurantModel;
