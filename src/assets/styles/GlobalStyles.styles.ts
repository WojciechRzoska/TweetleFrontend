import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    box-sizing: border-box;
  }
  img,
  picture {
  max-width: 100%;
  display: block;
  }
  body{
    margin:0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
  button{
    font-family: 'Nunito Sans', sans-serif;
  }
 

`;
