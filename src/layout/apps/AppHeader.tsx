import { Stack } from '@mui/material';
import BackButton from '@/apps/cyoa/components/inputs/BackButton';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

export interface IAppHeaderProps {
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
      <Stack
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        {props.about}
      </Stack>
    </Stack>
  );
};

export default AppHeader;
