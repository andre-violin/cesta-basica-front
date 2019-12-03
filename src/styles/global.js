import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  body {
    background: #222;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #eee;
    font-size: 14px;
    font-family: 'Lato', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
