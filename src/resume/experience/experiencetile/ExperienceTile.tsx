/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IExperienceItem } from '../Experience.hook';
import { Box, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ExperienceTileStyle } from './ExperienceTile.style';

export interface IExperienceTileProps {
  experience: IExperienceItem;
}

function ExperienceTile(props: IExperienceTileProps) {
  const { experience } = props;

  return (
    <Card variant={'outlined'} css={ExperienceTileStyle.root}>
      <Card variant={'outlined'} css={ExperienceTileStyle.companyInfo}>
        <Typography variant={'h5'}>{experience.company}</Typography>
        <Typography variant={'body1'}>{experience.address}</Typography>
        <Typography variant={'body1'}>{experience.phone}</Typography>
        <Typography variant={'body1'}>{experience.dateRange}</Typography>
      </Card>

      <div>
        <Box sx={{ p: 2 }} css={ExperienceTileStyle.descriptions}>
          {experience.descriptions.map((d) => (
            <Typography variant={'body1'}>{d}</Typography>
          ))}
        </Box>
      </div>
    </Card>
  );
}

export default ExperienceTile;
