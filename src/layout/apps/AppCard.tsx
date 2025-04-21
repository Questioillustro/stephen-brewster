import React from 'react';
import { CardContent, CardMedia, Typography, Button, Stack, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface AppCardProps {
  title?: string;
  imageSrc?: string;
  description?: string;
  link: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, imageSrc, description, link }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        width: '100%',
        maxHeight: '300px',
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }, // Optional: Add hover effect
      }}
      component={RouterLink}
      to={`./${link}`}
      style={{ textDecoration: 'none' }} // Remove underline from link
    >
      <Stack sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <CardMedia
          component='img'
          sx={{
            height: 250,
            objectFit: 'cover',
            width: '100%',
          }}
          image={imageSrc || 'https://via.placeholder.com/150x300'}
          title={title}
          alt={title}
        />

        <CardContent>
          <Typography variant='h5' component='h2'>
            {title}
          </Typography>

          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </Stack>
    </Paper>
  );
};

export default AppCard;
