import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');


* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.colors.background};
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.text};
  font-family: 'Nunito Sans',sans-serif;
}

select, button , input{
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
}

img {
  border-style: none;
}

a {
  text-decoration: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};

}

`;
