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
    <Paper elevation={0} css={CodeTileStyle.root} sx={{ p: 2, backgroundColor: 'cardContrastBg' }} square>
      <SBLink variant={'h6'} href={item.href} linkContent={item.linkText} />
      <Typography variant={'body1'}>{item.description}</Typography>
    </Paper>
  );
}

export default CodeTile;
