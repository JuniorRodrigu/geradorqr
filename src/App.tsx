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
        <div dangerouslySetInnerHTML={{ __html: `
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4032184268166534" crossorigin="anonymous"></script>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-4032184268166534"
               data-ad-slot="YOUR_AD_SLOT_ID"
               data-ad-format="auto"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        ` }} />
      </div>
    </ThemeProvider>
  );
}

export default App;
