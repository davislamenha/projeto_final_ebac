import styled from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryColor};
  font-weight: 700;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const Title = styled.h3`
  font-weight: 900;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${colors.secondaryColor};
  color: ${colors.primaryColor};
  margin-top: auto;
`;
