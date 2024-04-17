/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import Layout from './layout/Layout';
import { AppStyle } from './App.style';
import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <div css={AppStyle.root}>
          <Layout />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
