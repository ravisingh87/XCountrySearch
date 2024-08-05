import React from 'react';
import Country from './Country';
import { GlobalStyle } from './AppStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Country />
    </ThemeProvider>
  );
};

export default App;
