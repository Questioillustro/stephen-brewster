import React from 'react';
import { Stack } from '@mui/material';
import CarouselSelector from '@/apps/cyoa/components/carousel/CarouselSelector';
import { artCarouselItems } from '@/apps/cyoa/components/inputs/artstyle/ArtStyleList';
import {
  ArtStyleImage,
  StyleSquare,
} from '@/apps/cyoa/components/inputs/artstyle/ArtStyleCarousel.styles';

const ArtStyleSelector: React.FC<{ onChange: (style: string) => void }> = ({ onChange }) => {
  return (
    <Stack sx={{ width: '100%' }}>
      <CarouselSelector
        items={artCarouselItems}
        title='Choose Your Art Style!'
        itemWidth={145}
        onSelect={(item) => onChange(item.name)}
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
