import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import CarouselSelector from '@/apps/cyoa/components/carousel/CarouselSelector';

const artStyles = [
  { id: '1', name: 'Anime' },
  { id: '2', name: 'Watercolor' },
  { id: '3', name: 'Studio Ghibli' },
  { id: '4', name: 'Whimsical Fantasy' },
  { id: '5', name: 'Cartoon' },
];

const StyleSquare = styled(Box)<{ selected: boolean }>`
  width: 80px;
  height: 80px;
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
  padding: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #aaaaaa;
  }
`;

const ArtStyleSelector: React.FC<{ onChange: (style: string) => void }> = ({ onChange }) => {
  return (
    <CarouselSelector
      items={artStyles}
      title='Choose Your Art Style!'
      itemWidth={96} // 80px width + 16px gap
      onSelect={(item) => onChange(item.name)}
      useDividers
      renderItem={(item, selected, onClick) => (
        <StyleSquare selected={selected} onClick={onClick}>
          {item.name}
        </StyleSquare>
      )}
    />
  );
};

export default ArtStyleSelector;
