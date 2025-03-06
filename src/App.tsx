/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import Layout from './layout/Layout';
import { SBThemeProvider } from './contexts/ThemeContext';
import Fading from './components/animation/fading/Fading';

function App() {
  return (
      <React.StrictMode>
        <SBThemeProvider>
          <Fading child={<Layout />} />          
        </SBThemeProvider>
      </React.StrictMode>
  );
}

export default App;
