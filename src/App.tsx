/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import Layout from './layout/Layout';
import { AppStyle } from './App.style';
import { ThemeProvider } from '@mui/material';
import useTheme from './hooks/Theme.hook';
import { ThemeContext } from './contexts/ThemeContext';
import Fading from './components/animation/fading/Fading';

function App() {
  const { theme, setTheme, fadeIn, setFadeIn, slideIn, setSlideIn } = useTheme();

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme, fadeIn, setFadeIn, slideIn, setSlideIn }}>
        <ThemeProvider theme={theme}>
          <div css={AppStyle.root}>
            <Fading child={<Layout />} />
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

export default App;
