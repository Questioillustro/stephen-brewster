﻿import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactElement;
  description: string;
}

interface NavigationGridProps {
  compact?: boolean;
}

const navItems: NavItem[] = [
  { title: 'About', path: '/', icon: <HomeIcon />, description: 'Return to homepage' },
  { title: 'Apps', path: '/apps', icon: <AppsIcon />, description: 'Explore my applications' },
  {
    title: 'Resume',
    path: '/resume',
    icon: <DescriptionIcon />,
    description: 'View my professional experience',
  },
];

const NavigationGrid: React.FC<NavigationGridProps> = ({ compact = false }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: compact ? 1 : 3,
        ...(compact && {
          maxWidth: 'fit-content',
          mx: 'auto',
        }),
      }}
    >
      <Grid
        container
        spacing={compact ? 1 : 3}
        justifyContent='center'
        direction={compact ? 'row' : 'row'}
      >
        {navItems.map((item) => {
          const isSelected = location.pathname === item.path;
          return (
            <Grid
              item
              xs={compact ? 'auto' : 12}
              sm={compact ? 'auto' : 6}
              md={compact ? 'auto' : 4}
              lg={compact ? 'auto' : 3}
              key={item.title}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.2s',
                  ...(compact && {
                    borderRadius: 2,
                    boxShadow: 'none',
                    bgcolor: isSelected ? 'lightblue' : 'grey.900',
                    color: isSelected ? 'black' : 'grey.200',
                    '&:hover': {
                      bgcolor: isSelected ? '#87ceeb' : 'grey.800',
                    },
                  }),
                  ...(!compact && {
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }),
                }}
              >
                <CardActionArea component={RouterLink} to={item.path} sx={{ height: '100%' }}>
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: compact ? 'row' : 'column',
                      alignItems: 'center',
                      justifyContent: compact ? 'flex-start' : 'center',
                      textAlign: compact ? 'left' : 'center',
                      p: compact ? 1 : 3,
                      ...(compact && {
                        gap: 1,
                        minWidth: 120,
                        color: 'inherit',
                      }),
                    }}
                  >
                    <Box
                      sx={{
                        ...(compact && {
                          display: 'flex',
                          alignItems: 'center',
                          mr: 1,
                          color: isSelected ? 'black' : 'grey.400',
                        }),
                        ...(!compact && {
                          mb: 2,
                          color: 'primary.main',
                        }),
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        sx: { fontSize: compact ? 24 : 40 },
                      })}
                    </Box>
                    <Box>
                      <Typography
                        variant={compact ? 'body1' : 'h5'}
                        component='div'
                        sx={{
                          ...(compact && {
                            color: 'inherit',
                          }),
                        }}
                      >
                        {item.title}
                      </Typography>
                      {!compact && (
                        <Typography variant='body2' color='text.secondary'>
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NavigationGrid;
