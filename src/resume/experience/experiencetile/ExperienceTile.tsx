/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { IExperienceItem } from '../Experience.hook';
import { Card, Fade, List, ListItem, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ExperienceTileStyle } from './ExperienceTile.style';
import SBLink from '../../../components/link/SBLink';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { useContext } from 'react';
import { ThemeConstants } from '../../../theme/Theme';

export interface IExperienceTileProps {
  experience: IExperienceItem;
}

function ExperienceTile(props: IExperienceTileProps) {
  const { experience } = props;

  const { fadeIn } = useContext(ThemeContext);

  return (
    <Card variant={'outlined'} css={ExperienceTileStyle.root}>
      <Fade in={fadeIn} timeout={ThemeConstants.FadeTransitionDuration}>
        <Paper elevation={2} css={ExperienceTileStyle.companyInfo}>
          <SBLink href={experience.website} text={experience.company} variant={'h6'} />

          <Typography variant={'body2'}>{experience.address}</Typography>

          <Typography variant={'body2'}>{experience.phone}</Typography>

          <div css={ExperienceTileStyle.roleInfo}>
            <Typography variant={'body2'}>{experience.roles.join(' | ')}</Typography>

            <Typography variant={'body2'}>{experience.dateRange}</Typography>
          </div>
        </Paper>
      </Fade>

      <Fade in={fadeIn} timeout={ThemeConstants.FadeTransitionDuration}>
        <Paper elevation={0} css={ExperienceTileStyle.descriptions}>
          <List>
            {experience.descriptions.map((d) => (
              <ListItem key={d}>
                <Typography variant={'body1'}>{d}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Fade>
    </Card>
  );
}

export default ExperienceTile;
