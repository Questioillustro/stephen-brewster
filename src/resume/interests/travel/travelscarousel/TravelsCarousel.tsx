/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import TravelTile from '../traveltile/TravelTile';
import Carousel from '../../../../components/carousel/Carousel';
import { TravelsCarouselStyle } from './TravelsCarousel.style';
import { useTravelsHook } from '../traveltile/Travels.hook';

function TravelsCarousel() {
  const travels = useTravelsHook();

  const travelTiles = travels.map((t) => <TravelTile item={t} key={t.name} />);

  return (
    <div css={TravelsCarouselStyle.root}>
      <Carousel title={''} items={travelTiles} />
    </div>
  );
}

export default TravelsCarousel;
