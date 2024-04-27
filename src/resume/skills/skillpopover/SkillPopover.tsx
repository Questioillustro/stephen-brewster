import { ISkillItem } from '../Skills.hook';
import { Card, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';

export interface ISkillPopoverProps {
  skill: ISkillItem;
}

function SkillPopover(props: ISkillPopoverProps) {
  const { skill } = props;

  const practicedAt = useMemo(() => {
    const locations = skill.practicedAt ?? [];

    return (
      <>
        {locations.map((p) => (
          <Card variant={'outlined'} sx={{ p: 2 }}>
            <Typography variant={'body1'}>{p}</Typography>
          </Card>
        ))}
      </>
    );
  }, [skill]);

  return (
    <Paper elevation={2} sx={{ p: 2 }} square>
      <Card variant={'outlined'} sx={{ p: 2 }} square>
        <Typography variant={'h6'} color={'primary'}>
          {skill.years} Years
        </Typography>
      </Card>

      <div>{practicedAt}</div>
    </Paper>
  );
}

export default SkillPopover;
