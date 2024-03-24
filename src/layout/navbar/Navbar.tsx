import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { DocumentScanner, SportsMartialArts, Widgets } from '@mui/icons-material';
import React from 'react';
import { navBarStyle } from './Navbar.style';
import MenuListText from './MenuListText';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Navbar() {
  return (
    <MenuList css={navBarStyle.navMenuList}>
      <MenuItem>
        <ListItemIcon>
          <DocumentScanner fontSize='large' />
        </ListItemIcon>

        <ListItemText>
          <MenuListText text={'Resume'} />
        </ListItemText>
      </MenuItem>

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <Widgets fontSize='large' />
        </ListItemIcon>
        <ListItemText>
          <MenuListText text={'Widgets'} />
        </ListItemText>
      </MenuItem>

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <SportsMartialArts fontSize='large' />
        </ListItemIcon>
        <ListItemText>
          <MenuListText text={'Katas'} />
        </ListItemText>
      </MenuItem>
    </MenuList>
  );
}

export default Navbar;
