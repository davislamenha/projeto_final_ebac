import styled from 'styled-components';

import background from '../../assets/images/fundo.jpg';
import { colors } from '../../styles';

export const HeroBackground = styled.header`
  padding: 40px 0;
  background-image: url(${background});
  color: ${colors.primaryColor};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 138px;
  max-width: 28ch;
  text-align: center;
`;
