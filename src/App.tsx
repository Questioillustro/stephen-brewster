/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import Layout from './layout/Layout';
import { AppStyle } from './App.style';
import { Fade, ThemeProvider } from '@mui/material';
import useTheme from './hooks/Theme.hook';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { theme, setTheme, fadeIn, setFadeIn } = useTheme();

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme, fadeIn, setFadeIn }}>
        <ThemeProvider theme={theme}>
          <div css={AppStyle.root}>
            <Layout />
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

export default App;
