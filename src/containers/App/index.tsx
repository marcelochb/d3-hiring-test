import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";

import { Header } from '../../components';
import GlobalStyle from '../../styles/global';
import { dark } from '../../styles/themes';
import { Routes } from "../../routes";
import { usePersistedState } from '../../utils/hooks';


export const App = () => {
  const { theme, changeTheme } = usePersistedState('theme', dark);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header changeTheme={changeTheme} />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
