import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button, Stack } from '@mui/material';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { ComponentTitle } from '@/apps/codeassistant/codegen/components/ComponentTitle';

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

interface IGenericButtonGroupProps {
  labels: string[] | undefined;
  label: string;
  selected: string;
  onSelect: (selected: string) => void;
}

const GenericButtonGroup: React.FC<IGenericButtonGroupProps> = (
  props: IGenericButtonGroupProps,
) => {
  const handleClick = (value: string) => {
    props.onSelect(value);
  };

  return (
    <Stack direction='column' sx={{ p: 2 }}>
      <ComponentTitle title={props.label} />

      <StyledButtonGroup aria-label='selection'>
        {(props.labels ?? []).map((value) => (
          <Button
            key={value}
            onClick={() => handleClick(value)}
            className={props.selected === value ? 'Mui-selected' : ''}
            sx={{ fontSize: { xs: '8px', sm: '10px', md: '16px' } }}
          >
            {value}
          </Button>
        ))}
      </StyledButtonGroup>
    </Stack>
  );
};

export default GenericButtonGroup;
