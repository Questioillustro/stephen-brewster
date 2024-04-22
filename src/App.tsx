/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import Layout from './layout/Layout';
import { AppStyle } from './App.style';
import { SBThemeProvider } from './contexts/ThemeContext';
import Fading from './components/animation/fading/Fading';

function App() {
  return (
    <React.StrictMode>
      <SBThemeProvider>
        <div css={AppStyle.root}>
          <Fading child={<Layout />} />
        </div>
      </SBThemeProvider>
    </React.StrictMode>
  );
}

export default App;
