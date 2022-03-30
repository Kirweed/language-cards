import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        background-color: #fffbf0;
        font-family: 'Montserrat', sans-serif;
        color: #fffbf0;
        margin: 0;
    }
`;

export default GlobalStyles;
