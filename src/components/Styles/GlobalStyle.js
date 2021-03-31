import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    font-family: 'Encode Sans Expanded', sans-serif;
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

html {
    box-sizing: border-box;
  font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
}

body {
  background-color: #fafafa;
}

html,
body {
  padding: 0;
  margin: 0;
}
`;
