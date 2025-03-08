import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you're using react-router
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoIcon from '@mui/icons-material/Photo';

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactElement;
  description: string;
}

const navItems: NavItem[] = [
  {
    title: 'Apps',
    path: '/apps',
    icon: <AppsIcon />,
    description: 'Explore my applications',
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <DescriptionIcon />,
    description: 'View my professional experience',
  },
  {
    title: 'About',
    path: '/about',
    icon: <PersonIcon />,
    description: 'Learn more about me',
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <ArticleIcon />,
    description: 'Read my latest posts',
  },
  {
    title: 'Pictures',
    path: '/pictures',
    icon: <PhotoIcon />,
    description: 'View my photo gallery',
  },
];

const NavigationGrid: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3} justifyContent='center'>
        {navItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.title}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardActionArea component={RouterLink} to={item.path} sx={{ height: '100%' }}>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      sx: { fontSize: 40 },
                    })}
                  </Box>
                  <Typography variant='h5' component='div' gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NavigationGrid;
