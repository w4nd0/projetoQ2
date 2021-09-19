import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Montserrat, serif;
    }

    :root {
        --black: #050303;
        --navy: #0d2538;
        --white: #f0f0f0;
        --gray: #ccc;
        --darkgray: #333;
        --link: #385898;
        --blue: #007AFF;
	    --green: #2ade2a;
        --darkblue: #094979;
        --brown: #5a4054;
        --purple: #4830b0;
        --darkpurple: #2c296d; 
        --gradient-blue-dark: radial-gradient(circle, var(--darkblue) 0%, var(--black) 84%);
        --gradient-brown-dark: radial-gradient(circle, var(--brown) 10%, var(--black) 93%);
        --bg-gradient: radial-gradient(circle, var(--darkblue) 0%, var(--black) 110%);
        --gradient-purple-dark: linear-gradient(to bottom left, #2c296d 0%, #21222d 25%);
        --font: 'MedievalSharp', cursive;
    }

    body, div, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    button {
        cursor: pointer;
    }

    div.App {
        min-width: 100vw;
        min-height: 100vh;
    }

    body, html {
        max-width: 100%;
        overflow-x: hidden;
        position: relative;
    }
`;
