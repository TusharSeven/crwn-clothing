import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Open Sans Condensed';
        padding : 20px 60px;
        background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);

        @media screen and (max-width: 800px) {
            padding: 10px;
            height: auto;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }  
`