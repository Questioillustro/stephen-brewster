import React from 'react';
import { Box, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { envCarouselItems } from './EnvironmentList';
import CarouselSelector from '@/apps/cyoa/components/carousel/CarouselSelector';

const EnvironmentSquare = styled(Box)<{ selected: boolean }>`
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

const EnvironmentImage = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const EnvironmentSelect: React.FC<{ setEnvironment: (environment: string) => void }> = ({
  setEnvironment,
}) => {
  return (
    <Stack sx={{ width: '100%' }}>
      <CarouselSelector
        items={envCarouselItems}
        title='Choose a Setting!'
        itemWidth={126} // 105px width + 16px gap
        onSelect={(item) => setEnvironment(`The story setting is: ${item.prompt}.`)}
        useDividers
        renderItem={(item, selected, onClick) => (
          <EnvironmentSquare selected={selected} onClick={onClick}>
            <EnvironmentImage src={item.imageUrl} alt={item.name} />
          </EnvironmentSquare>
        )}
      />
    </Stack>
  );
};

export default EnvironmentSelect;
