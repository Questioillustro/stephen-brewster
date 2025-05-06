import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position='static' color='default' elevation={1}>
      <Toolbar sx={{ justifyContent: 'center' }}>
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
