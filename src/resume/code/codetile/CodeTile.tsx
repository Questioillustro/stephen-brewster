/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Paper, Typography } from '@mui/material';
import { ICodeItem } from '../Code.hooks';
import SBLink from '../../../components/link/SBLink';
import { CodeTileStyle } from './CodeTile.style';

export interface ICodeTileProps {
  item: ICodeItem;
}

function CodeTile(props: ICodeTileProps) {
  const { item } = props;

  return (
    <Paper elevation={1} css={CodeTileStyle.root} sx={{ p: 2 }}>
      <SBLink variant={'h6'} href={item.href} text={item.linkText} />
      <Typography variant={'body1'}>{item.description}</Typography>
    </Paper>
  );
}

export default CodeTile;
