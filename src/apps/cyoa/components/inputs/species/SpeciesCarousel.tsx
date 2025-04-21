import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import {
  mapSpeciesToCarouselItem,
  speciesList,
} from '@/apps/cyoa/components/inputs/species/speciesList';
import CarouselSelector from '@/apps/cyoa/components/carousel/CarouselSelector';

interface SpeciesSelectorProps {
  setSpecies: (species: string) => void;
}

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

const SpecieImage = styled('img')`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

export const SpeciesCarousel: React.FC<SpeciesSelectorProps> = ({ setSpecies }) => {
  const carouselItems = speciesList.map(mapSpeciesToCarouselItem);

  return (
    <CarouselSelector
      items={carouselItems}
      title='Species'
      itemWidth={106} // 80px width + 16px gap
      defaultSelectedId='0' // Default to first item (Human)
      onSelect={(item) => setSpecies(`Main character species is: ${item.name}.`)}
      renderItem={(item, selected, onClick) => (
        <SpeciesSquare selected={selected} onClick={onClick}>
          {item.imageUrl && <SpecieImage src={item.imageUrl} alt={item.name} />}
          {!item.imageUrl && <div>{item.name}</div>}
        </SpeciesSquare>
      )}
    />
  );
};
