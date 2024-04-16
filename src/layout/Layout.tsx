/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from './header/Header';
import { Paper } from '@mui/material';
import { LayoutStyle } from './Layout.style';
import Resume from '../resume/Resume';

function Layout() {
  return (
    <div css={LayoutStyle.root}>
      <Paper elevation={10} css={LayoutStyle.header} square>
        <Header />
      </Paper>

      <Paper elevation={1} css={LayoutStyle.contentWrapper} square>
        <div css={LayoutStyle.content}>
          <Resume />
        </div>
      </Paper>
    </div>
  );
}

export default Layout;
