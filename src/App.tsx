import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter } from "react-router-dom";

import { Header } from './components';
import GlobalStyle from './styles/global';
import { light, dark } from './styles/themes';
import { Routes } from "./routes";


const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const changeTheme = () => {
    setTheme(theme.title === 'Light' ? light : dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Header changeTheme={changeTheme} />
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
