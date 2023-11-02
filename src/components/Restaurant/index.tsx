import star from '../../assets/images/star.svg';
import Tag from '../Tag';
import {
  Card,
  Body,
  Header,
  Title,
  Review,
  Rate,
  Description,
  Button,
  TagsContainer,
} from './styles';

type RestaurantProps = {
  id: number;
  title: string;
  description: string;
  infos?: string[];
  cuisine: string;
  rate: number;
  image: string;
};

const Restaurant = ({
  id,
  title,
  description,
  image,
  infos,
  cuisine,
  rate,
}: RestaurantProps) => {
  return (
    <Card>
      <TagsContainer>
        {infos?.map((info) => {
          return <Tag children={info} key={info} />;
        })}
        <Tag children={cuisine} />
      </TagsContainer>
      <img src={image} alt={title} />
      <Body>
        <Header>
          <Title>{title}</Title>
          <Review>
            <Rate>{rate}</Rate>
            <img src={star} alt="star" />
          </Review>
        </Header>
        <Description>{description}</Description>
        <Button to={`/perfil/${id}`}>Saiba mais</Button>
      </Body>
    </Card>
  );
};

export default Restaurant;
