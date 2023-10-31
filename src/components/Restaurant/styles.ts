import styled from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  position: relative;
`;

export const TagsContainer = styled.div`
  padding: 16px 16px 0;
  display: flex;
  gap: 8px;
  right: 0;
  position: absolute;
`;

export const Body = styled.div`
  padding: 8px;
  background-color: ${colors.white};
  color: ${colors.primaryColor};
  border: 1px solid ${colors.primaryColor};
  border-top: 0px;
  font-weight: 700;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 18px;
`;

export const Title = styled.h3``;

export const Review = styled.div`
  display: flex;
  align-items: center;
`;

export const Rate = styled.span`
  margin-right: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryColor};
`;
