import styled from 'styled-components';

import background from '../../assets/images/fundo.jpg';
import { colors } from '../../styles';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  padding: 40px 0 80px;
  background-image: url(${background});
  font-weight: 900;
  font-size: 18px;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const MenuLink = styled(Link)`
  color: ${colors.primaryColor};
`;

export const Cart = styled.a`
  color: ${colors.primaryColor};
`;
