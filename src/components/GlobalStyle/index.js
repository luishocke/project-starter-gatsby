/* Global CSS */
import { createGlobalStyle } from 'styled-components';

// const with global css
const GlobalStyle = createGlobalStyle`
   
  // html / root CSS
  :root {
    height: 100%;
    margin: 0;
    padding: 0;
    
    /* Font imports */
    // font-family: ...
  }
  
  // Body CSS
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }

`;

// export const
export default GlobalStyle;
