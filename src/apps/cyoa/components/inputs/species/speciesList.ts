import { CarouselItem } from '@/apps/cyoa/components/carousel/types';

export interface ISpeciesItem {
  id: string;
  name: string;
  imageUrl: string;
}

export const mapSpeciesToCarouselItem = (specie: (typeof speciesList)[0]): CarouselItem => {
  return {
    id: specie.id,
    name: specie.name,
    imageUrl: specie.imageUrl,
  };
};

export const speciesList: ISpeciesItem[] = [
  {
    id: '1',
    name: 'Human',
    imageUrl: '/bav/human.jpg',
  },
  {
    id: '2',
    name: 'Dog',
    imageUrl: '/bav/dog.jpg',
  },
  {
    id: '3',
    name: 'Cat',
    imageUrl: '/bav/cat.jpg',
  },
  {
    id: '4',
    name: 'Mouse',
    imageUrl: '/bav/mouse.jpg',
  },
  {
    id: '5',
    name: 'Rabbit',
    imageUrl: '/bav/rabbit.jpg',
  },
  {
    id: '6',
    name: 'Bear',
    imageUrl: '/bav/bear.jpg',
  },
  {
    id: '7',
    name: 'Fox',
    imageUrl: '/bav/fox.jpg',
  },
  {
    id: '8',
    name: 'Wolf',
    imageUrl: '/bav/wolf.jpg',
  },
  {
    id: '9',
    name: 'Deer',
    imageUrl: '/bav/deer.jpg',
  },
  {
    id: '10',
    name: 'Squirrel',
    imageUrl: '/bav/squirrel.jpg',
  },
  {
    id: '12',
    name: 'Owl',
    imageUrl: '/bav/owl.jpg',
  },
  {
    id: '13',
    name: 'Eagle',
    imageUrl: '/bav/eagle.jpg',
  },
  {
    id: '16',
    name: 'Frog',
    imageUrl: '/bav/frog.jpg',
  },
  {
    id: '17',
    name: 'Lizard',
    imageUrl: '/bav/lizard.jpg',
  },
  {
    id: '21',
    name: 'Elephant',
    imageUrl: '/bav/elephant.jpg',
  },
];
