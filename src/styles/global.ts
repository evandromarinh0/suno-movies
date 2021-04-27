import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --light-gray: #EAEAEA;
    --medium-gray: #2E2D31;
    --medium-to-dark-gray: #252529;
    --not-so-dark-gray: #9F9FA0;
    --dark-gray: #212125;
    --darker-gray: #1B1B1F;
    --darkest-gray: #18181C;
    --pink: #FE3189;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--dark-gray);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    color: var(--light-gray);
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600
  }

  .swiper-button-prev {
    color: var(--white);
    top: 40%;
    left: 0;
    position: absolute;
  }

  .swiper-button-next {
    color: var(--white);
    top: 40%;
    right: 0;
    position: absolute;
  }

  .swiper-pagination-bullets {
    display: none;
  }

  .swiper-container {
    flex: 1;
  }
`;