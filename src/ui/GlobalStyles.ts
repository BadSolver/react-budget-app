import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
HTML {
    max-width: 100%;
    background-color: #1E3542;
}
body {
    max-width: 375px;
    margin: 0 auto;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: #000000;
    background: #FFFFFF;
}
`