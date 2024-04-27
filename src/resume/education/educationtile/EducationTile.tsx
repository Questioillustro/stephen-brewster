/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { EducationTileStyle } from './EducationTile.style';
import { Card, Paper } from '@mui/material';
import { IEducationItem } from '../Education.hook';
import Typography from '@mui/material/Typography';
import SBLink from '../../../components/link/SBLink';

export interface IEducationTileProps {
  education: IEducationItem;
}

function EducationTile(props: IEducationTileProps) {
  const { education } = props;

  return (
    <Paper elevation={0} css={EducationTileStyle.root} square>
      <Paper elevation={2} css={EducationTileStyle.card} square>
        <SBLink href={education.website} variant={'h6'} linkContent={education.school} />

        {education.honor && <Typography variant={'body1'}>{education.honor}</Typography>}

        <Typography variant={'body1'}>
          GPA: {education.gpa} / {education.gpaMax}
        </Typography>

        <Typography variant={'body1'}>{education.graduationDate}</Typography>
      </Paper>
    </Paper>
  );
}

export default EducationTile;
