﻿/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderStyle } from './Header.style';

function Header() {
  const navigate = useNavigate();

  return (
    <div css={HeaderStyle.root}>
      <Typography variant={'h4'} color={'primary'}>
        Stephen Brewster
      </Typography>
      <Typography variant={'subtitle1'} color={'tertiary'}>
        Software Engineer
      </Typography>
    </div>
  );
}

export default Header;