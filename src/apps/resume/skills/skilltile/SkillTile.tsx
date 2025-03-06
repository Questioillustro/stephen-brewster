/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Chip } from '@mui/material';
import { SkillTileStyle } from './SkillTile.style';
import { ISkillItem } from '../Skills.hook';
import { useMemo } from 'react';
import SBPopover from '@/components/popover/SBPopover';
import SkillPopover from '../skillpopover/SkillPopover';

export interface ISkillTileProps {
  skill: ISkillItem;
}

function SkillTile(props: ISkillTileProps) {
  const { skill } = props;

  const skillChip = useMemo(() => {
    return (
      <Chip color={'info'} label={skill.name} variant={'outlined'} css={SkillTileStyle.root} />
    );
  }, [skill]);

  return <SBPopover element={skillChip} content={<SkillPopover skill={skill} />} />;
}

export default SkillTile;
