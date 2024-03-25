/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import NavbarButtonGroup from './navbar/horizontal/NavbarButtonGroup';
import Header from './header/Header';
import { Paper } from '@mui/material';
import { LayoutStyle } from './Layout.style';
import Content from './content/Content';

function Layout() {
  return (
    <div css={LayoutStyle.root}>
      <Paper elevation={5} css={LayoutStyle.header} square>
        <Header />
      </Paper>

      <Paper elevation={0} css={LayoutStyle.navButtons} square>
        <NavbarButtonGroup />
      </Paper>

      <Paper elevation={5} css={LayoutStyle.content} square>
        <Content />
      </Paper>
    </div>
  );
}

export default Layout;
