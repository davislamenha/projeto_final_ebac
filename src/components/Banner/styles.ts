import styled from 'styled-components';
import { BannerProps } from '.';
import { colors } from '../../styles';

export const Container = styled.div<Omit<BannerProps, 'title' | 'cuisine'>>`
  position: relative;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  height: max(35vh, 300px);
  color: ${colors.white};
  font-size: 32px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 32px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Cuisine = styled.h2`
  font-weight: 100;
`;

export const Title = styled.h2`
  font-weight: 900;
`;
