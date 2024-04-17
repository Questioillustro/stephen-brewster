export interface IInterestItem {
  name: string;
  links?: ILinkItem[];
}

export interface ILinkItem {
  displayText: string;
  url: string;
}

export const useInterestsHook = (): IInterestItem[] => {
  return [
    {
      name: 'Bouldering',
    },
    {
      name: 'Travel',
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
      name: 'Fire Poi',
    },
    {
      name: 'Book Worm',
      links: [
        {
          displayText: 'GoodReads',
          url: 'https://www.goodreads.com/user/show/23215826-stephen-brewster',
        },
      ],
    },
    {
      name: 'Magic: The Gathering',
    },
  ];
};
