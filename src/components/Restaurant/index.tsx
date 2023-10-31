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
  title: string;
  description: string;
  infos: string[];
  rate: number;
  image: string;
};

const Restaurant = ({
  title,
  description,
  image,
  infos,
  rate,
}: RestaurantProps) => {
  return (
    <Card>
      <TagsContainer>
        {infos.map((info) => {
          return <Tag children={info} key={info} />;
        })}
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
        <Button>Saiba mais</Button>
      </Body>
    </Card>
  );
};

export default Restaurant;
