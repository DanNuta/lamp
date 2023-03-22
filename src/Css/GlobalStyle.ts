import { createGlobalStyle } from "styled-components";
import { color, Font } from "../constants/color";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Tilda';
  src: url(${Font.lightTilda}) format('woff2');
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}


/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

li{
    list-style-type: none;
}




ul[role='list'],
ol[role='list'] {
  list-style: none;
}


a{
    text-decoration: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color: ${color.bg_color};
  font-family: "sans-serif FiraCode";
}


a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
  html{
    scroll-behavior: smooth;
  }



@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;
