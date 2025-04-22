import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyleSquare = styled(Box)<{ selected: boolean }>`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '2px solid #1976d2' : '1px solid #ccc')};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#BBBBBB' : '#000000')};
  color: ${({ selected }) => (selected ? '#fff' : '#fff')};
  font-size: 12px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #aaaaaa;
  }
`;

export const ArtStyleImage = styled('img')`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;
