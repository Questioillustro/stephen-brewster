/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from './header/Header';
import { Fade, Paper } from '@mui/material';
import { LayoutStyle } from './Layout.style';
import Resume from '../resume/Resume';
import ControlPanel from './controlpanel/ControlPanel';

function Layout() {
  return (
    <div css={LayoutStyle.root}>
      <Paper elevation={0} css={LayoutStyle.header} square>
        <Header />
      </Paper>

      <Paper elevation={5} css={LayoutStyle.controlPanel} square>
        <ControlPanel />
      </Paper>

      <Paper elevation={10} css={LayoutStyle.contentWrapper} square>
        <div css={LayoutStyle.content}>
          <Resume />
        </div>
      </Paper>
    </div>
  );
}

export default Layout;
