/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IInterestItem } from '../Interests.hook';
import { Paper } from '@mui/material';
import { InterestTileStyle } from './InterestTile.style';
import SBAccordion from '@/components/accordion/SBAccordion';

export interface IInterestTileProps {
  interest: IInterestItem;
}

function InterestTile(props: IInterestTileProps) {
  const { interest } = props;

  return (
    <Paper elevation={3} css={InterestTileStyle.root} square>
      <SBAccordion title={interest.name} content={interest.component} />
    </Paper>
  );
}

export default InterestTile;
