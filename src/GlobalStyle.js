import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');

*,*::before,*::after{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color:#22C8FF;
}
`;

export default GlobalStyle;
