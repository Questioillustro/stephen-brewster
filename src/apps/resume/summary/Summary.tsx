/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '@mui/material/Typography';
import { SummaryStyle } from './Summary.style';
import { Link } from '@mui/material';

function Summary() {
  return (
    <div css={SummaryStyle.root}>
      <div css={SummaryStyle.textHidden}>
        <Typography variant={'body1'}>
          My passion for software development began in high school when I took an introduction to
          programming course. Starting with binary and moving on to development in Turbo Basic, I
          immediately fell in love with the power of software and the creative outlet it provided. I
          continued with it through my Senior year where I spent every study hall in the computer
          lab working on my very own versions of Tetris and Pacman for extra credit. Over twenty
          years later I am still surprised and amazed by the ways that my profession is evolving and
          transforming our lives for the better.
        </Typography>
      </div>
      <div css={SummaryStyle.continueButton}>
        <Link underline={'none'}>...continue reading</Link>
      </div>
    </div>
  );
}

export default Summary;
