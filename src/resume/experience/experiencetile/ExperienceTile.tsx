/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IExperienceItem } from '../Experience.hook';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';

export interface IExperienceTileProps {
  experience: IExperienceItem;
}

function ExperienceTile(props: IExperienceTileProps) {
  const { experience } = props;

  return (
    <Card variant={'outlined'}>
      <Typography variant={'h5'}>{experience.company}</Typography>
      <Typography variant={'h6'}>{experience.address}</Typography>
      <Typography variant={'h6'}>{experience.phone}</Typography>
    </Card>
  );
}

export default ExperienceTile;
