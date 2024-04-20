/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IInterestItem } from '../Interests.hook';
import Typography from '@mui/material/Typography';
import { Card, Link } from '@mui/material';
import { InterestTileStyle } from './InterestTile.style';

export interface IInterestTileProps {
  interest: IInterestItem;
}

function InterestTile(props: IInterestTileProps) {
  const { interest } = props;

  return (
    <Card variant={'outlined'} css={InterestTileStyle.root}>
      <Typography color={'secondary'} variant={'h5'}>
        {interest.name}
      </Typography>
      {interest.component && interest.component}
    </Card>
  );
}

export default InterestTile;
