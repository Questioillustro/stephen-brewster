import { ReactNode } from 'react';
import TravelsCarousel from './travel/travelscarousel/TravelsCarousel';

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
      name: 'Bouldering',
    },
    {
      name: 'Reading',
      links: [
        {
          displayText: 'GoodReads',
          url: 'https://www.goodreads.com/user/show/23215826-stephen-brewster',
        },
      ],
    },
    {
      name: 'Philosophy',
    },
    {
      name: 'Futurism',
    },
    {
      name: 'Rucking / Hiking',
    },
    {
      name: 'Poi',
    },
    {
      name: 'Magic: The Gathering',
    },
  ];
};
