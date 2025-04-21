import React from 'react';
import { Box, Stack } from '@mui/material';
import styled from '@emotion/styled';
import CarouselSelector from '@/apps/cyoa/components/carousel/CarouselSelector';
import { artCarouselItems } from '@/apps/cyoa/components/inputs/artstyle/ArtStyleList';

const StyleSquare = styled(Box)<{ selected: boolean }>`
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
  padding: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #aaaaaa;
  }
`;

const ArtStyleImage = styled('img')`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

const ArtStyleSelector: React.FC<{ onChange: (style: string) => void }> = ({ onChange }) => {
  return (
    <Stack sx={{ width: '100%' }}>
      <CarouselSelector
        items={artCarouselItems}
        title='Choose Your Art Style!'
        itemWidth={145}
        onSelect={(item) => onChange(item.name)}
        useDividers
        renderItem={(item, selected, onClick) => (
          <StyleSquare selected={selected} onClick={onClick}>
            <ArtStyleImage src={item.imageUrl} alt={item.name} />
          </StyleSquare>
        )}
      />
    </Stack>
  );
};

export default ArtStyleSelector;
