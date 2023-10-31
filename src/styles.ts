import { createGlobalStyle } from 'styled-components';

export const colors = {
  primaryColor: '#E66767',
  secondaryColor: '#FFEBD9',
  background: '#FFF8F2',
  white: '#fff',
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;  
font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${colors.background};
}

img {
  display: block;
  max-width: 100%;
}

.container {
  margin: 0 auto;
  width: min(100% - 30px, 1440px);
}
`;
