﻿/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IInterestItem } from '../Interests.hook';
import Typography from '@mui/material/Typography';
import { Card, Link, Paper } from '@mui/material';
import { InterestTileStyle } from './InterestTile.style';

export interface IInterestTileProps {
  interest: IInterestItem;
}

function InterestTile(props: IInterestTileProps) {
  const { interest } = props;

  return (
    <Paper elevation={1} css={InterestTileStyle.root}>
      <Typography color={'primary'} variant={'h5'}>
        {interest.name}
      </Typography>
      {interest.component && interest.component}
    </Paper>
  );
}

export default InterestTile;
