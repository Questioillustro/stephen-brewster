import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Avatar } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position='static' color='default' elevation={1}>
      <Toolbar disableGutters>
        <Avatar alt='Remy Sharp' src='/favicon.ico' sx={{ ml: 4 }} />

        <Typography variant={'h5'} fontFamily={'bangers'} color={'primary'} sx={{ pl: 2, pr: 4 }}>
          Stephen Brewster.com
        </Typography>

        <Box sx={{ display: 'flex', gap: 4 }}>
          <Link
            component={RouterLink}
            to='/'
            underline='none'
            color={location.pathname === '/' ? 'primary.main' : 'text.primary'}
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <Typography variant='h6'>About</Typography>
          </Link>
          <Link
            component={RouterLink}
            to='/apps'
            underline='none'
            color={location.pathname === '/apps' ? 'primary.main' : 'text.primary'}
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <Typography variant='h6'>Apps</Typography>
          </Link>
          <Link
            component={RouterLink}
            to='/resume'
            underline='none'
            color={location.pathname === '/resume' ? 'primary.main' : 'text.primary'}
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <Typography variant='h6'>Resume</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
