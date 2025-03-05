/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import React from 'react';
import { HeaderStyle } from './Header.style';
import { Download, LinkedIn } from '@mui/icons-material';
import SBLink from '../../components/link/SBLink';
import SBPopoverTextField from '../../components/popover/textfield/SBPopoverTextField';

function Header() {
  return (
    <div css={HeaderStyle.root}>
      <Typography variant={'h4'} color={'primary'}>
        Stephen Brewster
      </Typography>

      <Typography variant={'subtitle1'} color={'tertiary'}>
        Software Engineer
      </Typography>

      <div css={HeaderStyle.links}>
        <SBLink
          ariaLabel={'Download resume'}
          href={'/StephenBrewster_Resume.pdf'}
          linkContent={<Download />}
          popoverContent={<SBPopoverTextField text={'Download Resume (pdf)'} />}
        />
      </div>
    </div>
  );
}

export default Header;
