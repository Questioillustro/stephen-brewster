export interface IExperienceItem {
  company: string;
  address: string;
  phone: string;
  website: string;
  dateRange: string;
  roles: string[];
  years: number;
  descriptions: string[];
}

export const useExperienceHook = (): IExperienceItem[] => {
  return [
    {
      company: 'Solu Technology Partners',
      address: '7647 Main Street Fishers, Victor NY',
      phone: '(585) 625-2600',
      website: 'https://www.solutechnology.com/',
      dateRange: 'July 2015 - April 2024',
      roles: ['Solution Lead', 'Senior Software Engineer'],
      years: 9,
      descriptions: [
        'Promoted to solution lead within two years of college graduation',
        'Worked with approximately ten different interdisciplinary teams and four clients using agile methodologies',
        'Full stack developer with a focus on front-end development in Javascript and back-end in Java and C#',
        'Adapted my skill-set on demand as team membership and client priorities evolved',
        'Assisted in requirements gathering and guided scope negotiations to maximize the value to clients and meet their deadlines',
        'Volunteered overtime as needed to ensure on-time delivery of milestones',
      ],
    },
    {
      company: 'REDCOM Laboratories Inc',
      address: '1 Redcom Ctr, Victor NY',
      phone: '(585) 924-7550',
      website: 'https://www.redcom.com/',
      dateRange: 'November 2012 - September 2013',
      roles: ['Software Developer', 'Cooperative Education'],
      years: 1,
      descriptions: [
        'Assisted with the development of an administrative web application for telecommunication switches',
        'Converted over 80 JSP form pages to Javascript in less than one month using a custom wrapper for the datatables.net library',
        'Employed as part of the RIT cooperative education program and retained part-time following its conclusion',
      ],
    },
  ];
};
