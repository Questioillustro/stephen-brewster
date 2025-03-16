import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  IconButton,
  Slider,
  Stack,
  useTheme,
} from '@mui/material';
import { ZoomIn, ZoomOut } from '@mui/icons-material';
import { Theme } from '@mui/material/styles';

export interface StoryReaderProps {
  title: string;
  author: string;
  content: string;
}

const StoryReader: React.FC<StoryReaderProps> = ({ title, author, content }) => {
  const theme: Theme = useTheme();
  const [fontSize, setFontSize] = useState<number>(16);

  const handleFontSizeChange = (_event: Event, newValue: number | number[]) => {
    setFontSize(newValue as number);
  };

  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, bgcolor: 'background.default' }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant='h3'
            component='h1'
            gutterBottom
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.5rem' },
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' sx={{ fontStyle: 'italic' }}>
            By {author}
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Font Size Controls */}
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Stack direction='row' spacing={2} alignItems='center'>
            <IconButton onClick={() => setFontSize((prev) => Math.max(12, prev - 2))} size='small'>
              <ZoomOut />
            </IconButton>
            <Slider
              value={fontSize}
              onChange={handleFontSizeChange}
              min={12}
              max={24}
              step={2}
              sx={{ width: 120 }}
            />
            <IconButton onClick={() => setFontSize((prev) => Math.min(24, prev + 2))} size='small'>
              <ZoomIn />
            </IconButton>
          </Stack>
        </Box>

        {/* Story Content */}
        <Box
          sx={{
            '& p': {
              marginBottom: '1.5em',
              fontSize: `${fontSize}px`,
              lineHeight: 1.8,
              color: 'text.primary',
              textAlign: 'justify',
            },
            '& p:first-of-type::first-letter': {
              fontSize: '2.5em',
              fontWeight: 'bold',
              float: 'left',
              lineHeight: 1,
              marginRight: '0.2em',
            },
          }}
        >
          <Typography component='div'>
            {content
              .split('\n')
              .map((paragraph, index) => paragraph.trim() && <p key={index}>{paragraph}</p>)}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default StoryReader;
