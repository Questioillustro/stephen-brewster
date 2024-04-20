/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IInterestItem } from '../Interests.hook';
import Typography from '@mui/material/Typography';
import { Card, Link, Paper } from '@mui/material';
import { InterestTileStyle } from './InterestTile.style';
import SBAccordion from '../../../components/accordion/SBAccordion';

export interface IInterestTileProps {
  interest: IInterestItem;
}

function InterestTile(props: IInterestTileProps) {
  const { interest } = props;

  return (
    <Paper elevation={3} css={InterestTileStyle.root}>
      {interest.component && <SBAccordion title={interest.name} content={interest.component} />}

      {!interest.component && (
        <Typography color={'primary'} variant={'h5'}>
          {interest.name}
        </Typography>
      )}
    </Paper>
  );
}

export default InterestTile;
