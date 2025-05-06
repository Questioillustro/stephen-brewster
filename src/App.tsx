import React, { StrictMode } from 'react';
import Layout from './layout/Layout';
import '@fontsource/comic-neue';
import '@fontsource/bangers';
import '@fontsource/poppins';
import { SBThemeProvider } from '@/theme/SBThemeContext';

function App() {
  return (
    <SBThemeProvider theme={'dark'}>
      <StrictMode>
        <Layout />
      </StrictMode>
    </SBThemeProvider>
  );
}

export default App;
