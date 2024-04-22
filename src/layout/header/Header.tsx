/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import React from 'react';
import { HeaderStyle } from './Header.style';
import { Link } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

function Header() {
  return (
    <div css={HeaderStyle.root}>
      <Typography variant={'h4'} color={'primary'}>
        Stephen Brewster
      </Typography>
      <Typography variant={'subtitle1'} color={'tertiary'}>
        Software Engineer
      </Typography>

      <Link href={'https://www.linkedin.com/in/stephen-brewster-5b3180166/'} target={'_blank'}>
        <LinkedIn />
      </Link>
    </div>
  );
}

export default Header;
