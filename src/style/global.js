import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #e7e7e7;
        @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
    }
    }
    button {
        border: none;
    }
    ul > li {
        list-style: none;
    }
`;
export default GlobalStyles;
