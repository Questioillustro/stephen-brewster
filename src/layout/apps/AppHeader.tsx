import { Paper, Stack } from '@mui/material';
import BackButton from '@/apps/cyoa/components/inputs/buttons/BackButton';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

export interface IAppHeaderProps {
  content?: ReactNode;
  about?: ReactNode;
}

const AppHeader = (props: IAppHeaderProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/apps');
  };

  return (
    <Stack
      direction={'row'}
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BackButton onclick={goBack} />

      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Stack
          direction={'row'}
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          {props.content}
          {props.about}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default AppHeader;
