﻿/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { EducationTileStyle } from './EducationTile.style';
import { Box, Card, Link } from '@mui/material';
import { IEducationItem } from '../Education.hook';
import Typography from '@mui/material/Typography';

export interface IEducationTileProps {
  education: IEducationItem;
}

function EducationTile(props: IEducationTileProps) {
  const { education } = props;

  return (
    <Box css={EducationTileStyle.root}>
      <Card variant={'outlined'} css={EducationTileStyle.card}>
        <Link href={education.website} target={'_blank'} underline={'none'}>
          <Typography variant={'h6'}>{education.school}</Typography>
        </Link>

        {education.honor && <Typography variant={'body1'}>{education.honor}</Typography>}

        <Typography variant={'body1'}>
          GPA: {education.gpa} / {education.gpaMax}
        </Typography>

        <Typography variant={'body1'}>{education.graduationDate}</Typography>
      </Card>
    </Box>
  );
}

export default EducationTile;