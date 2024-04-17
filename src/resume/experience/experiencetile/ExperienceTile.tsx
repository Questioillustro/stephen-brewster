/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IExperienceItem } from '../Experience.hook';
import { Card, Link, List, ListItem, Paper } from '@mui/material';
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
        <Link href={experience.website} target={'_blank'} underline={'none'}>
          <Typography variant={'h6'}>{experience.company}</Typography>
        </Link>

        <Typography variant={'body2'}>{experience.address}</Typography>

        <Typography variant={'body2'}>{experience.phone}</Typography>

        <div css={ExperienceTileStyle.roleInfo}>
          <Typography variant={'body2'}>{experience.roles.join(' | ')}</Typography>

          <Typography variant={'body2'}>{experience.dateRange}</Typography>
        </div>
      </Card>

      <Paper css={ExperienceTileStyle.descriptions}>
        <List>
          {experience.descriptions.map((d) => (
            <ListItem>
              <Typography variant={'body1'}>{d}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Card>
  );
}

export default ExperienceTile;
