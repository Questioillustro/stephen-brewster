import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Paper } from '@mui/material';
import { LayoutStyle } from './Layout.style';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavbarButtonGroup from './navbar/horizontal/NavbarButtonGroup';

function Layout() {
  return (
    <div css={LayoutStyle.root}>
      <Paper elevation={5} css={LayoutStyle.header}>
        <Header />
      </Paper>

      <Paper css={LayoutStyle.navButtons}>
        <NavbarButtonGroup />
      </Paper>

      <Paper elevation={5} css={LayoutStyle.content}></Paper>

      <Paper elevation={5} css={LayoutStyle.footer}>
        <Footer />
      </Paper>
    </div>
  );
}

export default Layout;
