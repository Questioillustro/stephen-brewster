import { CarouselItem } from '@/apps/cyoa/components/carousel/CarouselSelector.types';

export interface IArtStyleItem {
  id: string;
  name: string;
  imageUrl: string;
}

export const mapArtStyleToCarouselItem = (artStyle: (typeof ArtStyleList)[0]): CarouselItem => {
  return {
    id: artStyle.id,
    name: artStyle.name,
    imageUrl: artStyle.imageUrl,
  };
};

export const ArtStyleList: IArtStyleItem[] = [
  { id: '1', name: 'Anime', imageUrl: '/bav/anime.jpg' },
  { id: '2', name: 'Watercolor', imageUrl: '/bav/watercolor.jpg' },
  { id: '3', name: 'Studio Ghibli', imageUrl: '/bav/studioghibli.jpg' },
  { id: '4', name: 'Fantasy', imageUrl: '/bav/fantasy.jpg' },
  { id: '5', name: 'Cartoon', imageUrl: '/bav/cartoon.jpg' },
];

export const artCarouselItems: CarouselItem[] = ArtStyleList.map(mapArtStyleToCarouselItem);
