import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Stack, Paper } from '@mui/material';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledButtonGroup = styled(ButtonGroup)(
  () => css`
    .MuiButton-root {
      text-transform: none;
      font-weight: 500;
      padding: 8px 16px;
      border: 1px solid #e0e0e0;
      &:hover {
        background-color: #f5f5f5;
      }
      &.Mui-selected {
        background-color: #1976d2;
        color: #ffffff;
        &:hover {
          background-color: #1565c0;
        }
      }
    }
  `,
);

interface GenericButtonGroupProps {
  labels: string[];
  label: string;
  onSelect: (selected: string) => void;
}

const GenericButtonGroup: React.FC<GenericButtonGroupProps> = ({
  labels,
  label = 'Options',
  onSelect,
}) => {
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    onSelect(labels[0]);
    setSelected(labels[0]);
  }, [labels]);

  const handleClick = (value: string) => {
    setSelected(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack direction='column'>
        <Typography variant='body1' sx={{ mb: 1 }}>
          {label}
        </Typography>
        <StyledButtonGroup aria-label='selection'>
          {labels.map((value) => (
            <Button
              key={value}
              onClick={() => handleClick(value)}
              className={selected === value ? 'Mui-selected' : ''}
            >
              {value}
            </Button>
          ))}
        </StyledButtonGroup>
      </Stack>
    </Paper>
  );
};

export default GenericButtonGroup;
