import React, { useState } from 'react';
import { ButtonGroup, Button, Stack, Paper } from '@mui/material';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { useCodegenContext } from '@/apps/codeassistant/codegen/context/CodegenContext';
import {
  FrontEndFrameworkOptions,
  IFrontEndFrameworkOption,
} from '@/apps/codeassistant/codegen/data/AllOptions';
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

const FrameworkButtonGroup: React.FC = () => {
  const [selected, setSelected] = useState<string>('React');

  const { addFramework } = useCodegenContext();

  const handleClick = (framework: IFrontEndFrameworkOption) => {
    setSelected(framework.framework);
    addFramework(framework);
  };

  return (
    <Stack direction={'column'} sx={{ p: 2 }}>
      <Typography variant={'body1'} sx={{ mb: 1 }}>
        Framework
      </Typography>

      <StyledButtonGroup aria-label='framework selection'>
        {FrontEndFrameworkOptions.map((framework) => (
          <Button
            key={framework.framework}
            onClick={() => handleClick(framework)}
            sx={{ fontSize: { xs: '8px', sm: '10px', md: '16px' } }}
            className={selected === framework.framework ? 'Mui-selected' : ''}
          >
            {framework.framework}
          </Button>
        ))}
      </StyledButtonGroup>
    </Stack>
  );
};

export default FrameworkButtonGroup;
