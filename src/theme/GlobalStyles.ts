import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        background-color: #eae7dc;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }
`;

export default GlobalStyles;
