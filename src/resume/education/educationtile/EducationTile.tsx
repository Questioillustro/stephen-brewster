/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { EducationTileStyle } from './EducationTile.style';
import { Box, Card, Link, Paper } from '@mui/material';
import { IEducationItem } from '../Education.hook';
import Typography from '@mui/material/Typography';
import SBLink from '../../../components/link/SBLink';

export interface IEducationTileProps {
  education: IEducationItem;
}

function EducationTile(props: IEducationTileProps) {
  const { education } = props;

  return (
    <Card variant={'outlined'} css={EducationTileStyle.root}>
      <Paper elevation={2} css={EducationTileStyle.card}>
        <SBLink href={education.website} variant={'h6'} text={education.school} />

        {education.honor && <Typography variant={'body1'}>{education.honor}</Typography>}

        <Typography variant={'body1'}>
          GPA: {education.gpa} / {education.gpaMax}
        </Typography>

        <Typography variant={'body1'}>{education.graduationDate}</Typography>
      </Paper>
    </Card>
  );
}

export default EducationTile;
