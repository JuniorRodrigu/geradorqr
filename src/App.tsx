import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import light from './styles/themes/light';
import dark from './styles/themes/dark';   

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Qrcode from './components/Qrcode';

const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Qrcode/>
      </div>
    </ThemeProvider>
  );
}

export default App;
