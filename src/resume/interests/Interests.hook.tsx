export interface IInterestItem {
  name: string;
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
      name: 'Rucking',
    },
    {
      name: 'Fire Poi',
    },
    {
      name: 'Book Worm',
    },
    {
      name: 'Self-Improvement',
    },
  ];
};
