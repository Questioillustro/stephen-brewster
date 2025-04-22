import React from 'react';
import { Stack } from '@mui/material';
import { envCarouselItems } from './EnvironmentList';
import CarouselSelector from '@/apps/cyoa/components/carousel/CarouselSelector';
import {
  EnvironmentImage,
  EnvironmentSquare,
} from '@/apps/cyoa/components/inputs/environment/EnvironmentCarousel.styles';

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
