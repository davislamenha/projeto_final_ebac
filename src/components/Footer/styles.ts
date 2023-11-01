import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.footer`
  background-color: ${colors.secondaryColor};
  padding: 40px 0;
  color: ${colors.primaryColor};
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialMediaList = styled.ul`
  margin: 32px 0 80px;
  display: flex;
  gap: 8px;
`;

export const Item = styled.li``;

export const Link = styled.a``;

export const Text = styled.p`
  font-size: 10px;
`;
