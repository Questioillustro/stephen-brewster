﻿/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from './header/Header';
import { Paper } from '@mui/material';
import { LayoutStyle } from './Layout.style';
import Resume from '../resume/Resume';
import ControlPanel from './controlpanel/ControlPanel';
import Growing from '../components/animation/growing/Growing';
import Sliding from '../components/animation/sliding/Sliding';

function Layout() {
  return (
    <div css={LayoutStyle.root}>
      <Paper elevation={0} css={LayoutStyle.header} square>
        <Growing child={<Header />} />
      </Paper>

      <Paper elevation={5} css={LayoutStyle.controlPanel} square>
        <Sliding direction={'right'} child={<ControlPanel />} />
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
