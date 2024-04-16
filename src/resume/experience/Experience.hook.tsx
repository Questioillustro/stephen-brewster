export interface IExperienceItem {
  company: string;
  address: string;
  phone: string;
  years: number;
  descriptions: string[];
}

export const useExperienceHook = (): IExperienceItem[] => {
  return [
    {
      company: 'REDCOM Laboratories Inc',
      address: '1 Redcom Ctr, Victor, NY',
      phone: '(585) 924-7550',
      years: 1.5,
      descriptions: [],
    },
  ];
};
