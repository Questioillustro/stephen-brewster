import React from 'react';
import { Box, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { speciesList } from '@/apps/cyoa/components/inputs/species/speciesList';
import CarouselSelector from '@/apps/cyoa/components/inputs/carousel/CarouselSelector';

interface SpeciesSelectorProps {
  setSpecies: (species: string) => void;
}

interface CarouselItem {
  id: string;
  name: string;
  [key: string]: any;
}

// Method to convert a species string to a CarouselItem
const convertSpeciesToCarouselItem = (species: string, index: number): CarouselItem => {
  return {
    id: `${index}`, // Use index as a unique identifier
    name: species,
  };
};

const SpeciesSquare = styled(Box)<{ selected: boolean }>`
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

export const SpeciesCarousel: React.FC<SpeciesSelectorProps> = ({ setSpecies }) => {
  const carouselItems = speciesList.map(convertSpeciesToCarouselItem);

  return (
    <CarouselSelector
      items={carouselItems}
      title='Species'
      itemWidth={96} // 80px width + 16px gap
      defaultSelectedId='0' // Default to first item (Human)
      onSelect={(item) => setSpecies(`Main character species is: ${item.name}.`)}
      renderItem={(item, selected, onClick) => (
        <SpeciesSquare selected={selected} onClick={onClick}>
          {item.name}
        </SpeciesSquare>
      )}
    />
  );
};
