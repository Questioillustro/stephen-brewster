/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Chip } from '@mui/material';
import { SkillTileStyle } from './SkillTile.style';

export interface ISkillTileProps {
  name: string;
}

function SkillTile(props: ISkillTileProps) {
  return <Chip color={'info'} label={props.name} variant={'outlined'} css={SkillTileStyle.root} />;
}

export default SkillTile;
