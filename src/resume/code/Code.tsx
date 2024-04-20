/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { CodeStyle } from './Code.style';
import { Link, Typography } from '@mui/material';

function Code() {
  return (
    <div css={CodeStyle.root}>
      <div>
        <Link
          href={'https://github.com/Questioillustro/stephen-brewster'}
          target={'_blank'}
          underline={'none'}
          css={CodeStyle.codeLink}
        >
          <img alt={'Github repo'} src={'/github.png'} height={50} />
          <Typography variant={'body1'}>Github</Typography>
        </Link>
      </div>

      <div>
        <Link
          href={'https://www.codewars.com/users/Questioillustro/stats'}
          target={'_blank'}
          underline={'none'}
          css={CodeStyle.codeLink}
        >
          <img alt={'Code wars profile'} src={'/codewars.svg'} height={50} />
          <Typography variant={'body1'}>Code Wars</Typography>
        </Link>
      </div>
    </div>
  );
}

export default Code;
