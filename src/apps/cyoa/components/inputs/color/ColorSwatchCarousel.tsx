import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { colorCarouselItems } from '@/apps/cyoa/components/inputs/color/ColorSwatchList';
import CarouselSelector from '@/apps/cyoa/components/carousel/CarouselSelector';

const ColorSquare = styled(Box)<{ selected: boolean; hex: string }>`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '2px solid #1976d2' : '1px solid #ccc')};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ hex }) => hex};
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const ColorSwatchCarousel: React.FC<{
  onColorSelect?: (color: string) => void;
  title?: string;
}> = ({ onColorSelect, title }) => {
  return (
    <CarouselSelector
      items={colorCarouselItems}
      title={title || 'Color Swatch'}
      itemWidth={80} // 60px width + 16px gap
      onSelect={(item) => onColorSelect && onColorSelect(item.name)}
      renderItem={(item, selected, onClick) => (
        <ColorSquare selected={selected} hex={item.hex} onClick={onClick} title={item.name} />
      )}
    />
  );
};

export default ColorSwatchCarousel;
