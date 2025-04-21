import { CarouselItem } from '@/apps/cyoa/components/carousel/CarouselSelector';

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
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/human.jpg',
  },
  {
    id: '2',
    name: 'Dog',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/dog.jpg',
  },
  {
    id: '3',
    name: 'Cat',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/cat.jpg',
  },
  {
    id: '4',
    name: 'Mouse',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/mouse.jpg',
  },
  {
    id: '5',
    name: 'Rabbit',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/rabbit.jpg',
  },
  {
    id: '6',
    name: 'Bear',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/bear.jpg',
  },
  {
    id: '7',
    name: 'Fox',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/fox.jpg',
  },
  {
    id: '8',
    name: 'Wolf',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/wolf.jpg',
  },
  {
    id: '9',
    name: 'Deer',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/deer.jpg',
  },
  {
    id: '10',
    name: 'Squirrel',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/squirrel.jpg',
  },
  {
    id: '12',
    name: 'Owl',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/owl.jpg',
  },
  {
    id: '13',
    name: 'Eagle',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/eagle.jpg',
  },
  {
    id: '16',
    name: 'Frog',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/frog.jpg',
  },
  {
    id: '17',
    name: 'Lizard',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/lizard.jpg',
  },
  {
    id: '21',
    name: 'Elephant',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/elephant.jpg',
  },
];
