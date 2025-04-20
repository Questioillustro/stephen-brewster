import { CarouselItem } from '@/apps/cyoa/components/carousel/CarouselSelector';

export interface ColorOption {
  name: string;
  hex: string;
}

export const convertColorOptionToCarouselItem = (color: ColorOption): CarouselItem => {
  return {
    id: color.hex, // Use hex as a unique identifier
    name: color.name,
    hex: color.hex,
  };
};

export const colorOptions: ColorOption[] = [
  { name: 'Ruby Red', hex: '#E0115F' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'Tangerine', hex: '#FF8C00' },
  { name: 'Sunflower', hex: '#FFC107' },
  { name: 'Golden Tan', hex: '#D4A373' },
  { name: 'Mint', hex: '#98FF98' },
  { name: 'Emerald Green', hex: '#50C878' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Amethyst', hex: '#9966CC' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Pale Rose', hex: '#F8D8D8' },
  { name: 'Rich Cocoa', hex: '#5C4033' },
  { name: 'Ebony', hex: '#3A2E28' },
];

export const colorCarouselItems: CarouselItem[] = colorOptions.map(
  convertColorOptionToCarouselItem,
);
