/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import React from 'react';

function Header() {
  return (
    <div css={HeaderStyle.root}>
      <Typography variant={'h4'} color={'primary'}>
        Stephen Brewster
      </Typography>

      <Typography variant={'subtitle1'} color={'tertiary'}>
        Human of Earth
      </Typography>
    </div>
  );
}

const HeaderStyle = {
  root: css({ textAlign: 'center' }),
};

export default Header;
