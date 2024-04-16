/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { EducationTileStyle } from './EducationTile.style';
import { Box, Card } from '@mui/material';
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
        <Typography variant={'h5'}>{education.school}</Typography>

        {education.honor && <Typography variant={'h6'}>{education.honor}</Typography>}

        <Typography variant={'body1'}>
          GPA: {education.gpa} / {education.gpaMax}
        </Typography>

        <Typography variant={'body1'}>{education.graduationDate}</Typography>
      </Card>
    </Box>
  );
}

export default EducationTile;
