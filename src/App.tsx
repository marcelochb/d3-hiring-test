import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/UI/Header';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App = () => {
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    setTheme(theme.title === 'Light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <GlobalStyle />
        <Header changeTheme={changeTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
