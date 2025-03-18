import { Paper, Typography } from '@mui/material';

const Header = () => {
  return (
    <Paper variant={'outlined'} style={{ width: '100%', textAlign: 'center' }}>
      <img
        src={
          'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/buildadventure3.png'
        }
        width={'100%'}
        height={'auto'}
      />
    </Paper>
  );
};

export default Header;
