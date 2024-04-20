/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import { AppStyle } from './App.style';
import { ThemeProvider } from '@mui/material';
import useTheme from './hooks/Theme.hook';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
