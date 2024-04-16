export interface IExperienceItem {
  company: string;
  address: string;
  phone: string;
  dateRange: string;
  years: number;
  descriptions: string[];
}

export const useExperienceHook = (): IExperienceItem[] => {
  return [
    {
      company: 'Solu Technology Partners',
      address: '7647 Main Street Fishers, Victor NY',
      phone: '(585) 625-2600',
      dateRange: 'July 2015 - April 2024',
      years: 8,
      descriptions: [
        'Full stack developer servicing multiple clients over my eight year tenure',
        'Worked across a large variety of technologies and adapting my skill-set on demand',
        'Promoted to solution lead within two years of college graduation',
      ],
    },
    {
      company: 'REDCOM Laboratories Inc',
      address: '1 Redcom Ctr, Victor NY',
      phone: '(585) 924-7550',
      dateRange: 'November 2012 - September 2013',
      years: 1.5,
      descriptions: [
        'Assisted with the development of an administrative web application for updating a telecommunication switch',
        'Converted over 80 JSP front end pages to javascript in less than one month by implementing a custom wrapper around the datatables.net library',
        'Employed as part of the RIT cooperative education program and retained part-time following the conclusion of one year cooperative',
      ],
    },
  ];
};
