import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    ${
        "" /* radial-gradient(
        50% 95% at 25% bottom,
        rgba(229, 106, 179, 0.4) 0%,
        rgba(239, 135, 190, 0.32) 10%,
        rgba(249, 163, 203, 0.24) 20%,
        rgba(252, 188, 215, 0.16) 30%,
        rgba(255, 206, 230, 0.08) 40%,
        rgba(12, 15, 26, 0) 100%
    ) */
    }
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title}; 
  }
  a {
    color: #e1e2e3;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .light{
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
`;

export default GlobalStyles;
