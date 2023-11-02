import image1 from '../assets/images/imagem_1.jpg';
import image2 from '../assets/images/imagem_2.jpg';
import image3 from '../assets/images/imagem_3.jpg';

import ProductModel from '../models/Product';
import RestaurantModel from '../models/Restaurant';

const productsList: ProductModel[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
  },
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
  },
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
  },
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
  },
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
  },
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: image3,
  },
];

const restaurants: RestaurantModel[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: image1,
    infos: ['Destaque da Semana'],
    cuisine: 'Japonesa',
    rate: 4.9,
    products: [
      {
        id: 1,
        description:
          'Sashimi de salmão é uma delicada seleção de finas fatias de salmão cru, servidas frescas e deslizando suavemente na língua. Uma experiência de sabor única e elegante para os amantes de sushi.',
        title: 'Sashimi de Salmão',
        image: image1,
      },
      {
        id: 2,
        description:
          'Sashimi de salmão é uma delicada seleção de finas fatias de salmão cru, servidas frescas e deslizando suavemente na língua. Uma experiência de sabor única e elegante para os amantes de sushi.',
        title: 'Sashimi de Salmão',
        image: image1,
      },
    ],
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image2,
    cuisine: 'Italiana',
    rate: 4.6,
    products: productsList,
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image2,
    cuisine: 'Italiana',
    rate: 4.6,
    products: productsList,
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image2,
    cuisine: 'Italiana',
    rate: 4.6,
    products: productsList,
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image2,
    cuisine: 'Italiana',
    rate: 4.6,
    products: productsList,
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image2,
    cuisine: 'Italiana',
    rate: 4.6,
    products: productsList,
  },
];

export default restaurants;
