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
      <Typography variant={'h5'}>{interest.name}</Typography>
      {/*{interest.links &&*/}
      {/*  interest.links.map((l) => (*/}
      {/*    <Link underline={'none'} href={l.url} target={'_blank'}>*/}
      {/*      {l.displayText}*/}
      {/*    </Link>*/}
      {/*  ))}*/}
    </Card>
  );
}

export default InterestTile;
