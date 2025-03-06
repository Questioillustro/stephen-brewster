/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IExperienceItem } from '../Experience.hook';
import { Card, List, ListItem, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ExperienceTileStyle } from './ExperienceTile.style';
import SBLink from '../../../components/link/SBLink';
import { useMemo } from 'react';
import TypingText from "../../../components/animation/typingtext/TypingText";

export interface IExperienceTileProps {
  experience: IExperienceItem;
}

function ExperienceTile(props: IExperienceTileProps) {
  const { experience } = props;

  return (
    <Card variant={'outlined'} css={ExperienceTileStyle.root} square>
      <Paper elevation={0} css={ExperienceTileStyle.companyInfo} sx={{ backgroundColor: 'cardContrastBg' }}>
        <div css={ExperienceTileStyle.titleWrapper}>
          <SBLink variant={'h6'} href={experience.website} linkContent={experience.company} />

          <Typography variant={'body2'} color={'secondary'}>
            ~{experience.years} {experience.years === 1 ? 'Year' : 'Years'}
          </Typography>
        </div>

        <Typography variant={'body2'}>{experience.address}</Typography>

        <Typography variant={'body2'}>{experience.phone}</Typography>

        <div css={ExperienceTileStyle.roleInfo}>
          <Typography variant={'body2'} color={'primary'}>
            {experience.roles.join(' | ')}
          </Typography>

          <Typography variant={'body2'}>{experience.dateRange}</Typography>
        </div>
      </Paper>

      <Paper elevation={0} css={ExperienceTileStyle.descriptions}>
        <List>
          {experience.descriptions.map((d) => (
            <ListItem key={d}>
              <Typography variant={'body1'}><TypingText text={d} /></Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Card>
  );
}

export default ExperienceTile;
