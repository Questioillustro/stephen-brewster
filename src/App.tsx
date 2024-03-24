import React from 'react';
import Layout from './layout/Layout';
import { AppStyle } from './App.style';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  return (
    <div css={AppStyle.root}>
      <Layout />
    </div>
  );
}

export default App;
