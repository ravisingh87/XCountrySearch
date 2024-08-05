import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    background-color:${(props) => props.theme.color.white}
  }
`;
