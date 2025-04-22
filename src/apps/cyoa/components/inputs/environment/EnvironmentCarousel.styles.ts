import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const EnvironmentSquare = styled(Box)<{ selected: boolean }>`
  width: 105px;
  height: 105px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '4px solid #1976d2' : '2px solid #ccc')};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#BBBBBB' : '#000000')};
  &:hover {
    background-color: #aaaaaa;
  }
`;

export const EnvironmentImage = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;
