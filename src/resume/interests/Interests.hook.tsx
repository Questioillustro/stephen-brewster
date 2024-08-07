import { ReactNode } from 'react';
import TravelsCarousel from './travel/travelscarousel/TravelsCarousel';
import Bouldering from './bouldering/Bouldering';
import Books from './books/Books';

export interface IInterestItem {
  name: string;
  links?: ILinkItem[];
  component?: ReactNode;
}

export interface ILinkItem {
  displayText: string;
  url: string;
}

export const useInterestsHook = (): IInterestItem[] => {
  return [
    {
      name: 'Travel',
      component: <TravelsCarousel />,
    },
    {
      name: 'Reading / Writing',
      component: <Books />,
    },
    {
      name: 'Bouldering',
      component: <Bouldering />,
    },
    // {
    //   name: 'Philosophy',
    // },
    // {
    //   name: 'Futurism',
    // },
    // {
    //   name: 'Rucking / Hiking',
    // },
    // {
    //   name: 'Poi',
    // },
    // {
    //   name: 'Magic: The Gathering',
    // },
  ];
};
