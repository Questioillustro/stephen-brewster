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
        'Worked with approximately ten different interdisciplinary teams and four clients',
        'Extensive experience in designing and building distributed software systems across the full stack',
        'Designed solutions within both legacy software solutions as well as modern technologies',
        'Adapted my skill-set on demand as team membership and client priorities evolved',
        'Assisted in requirements gathering and guided scope negotiations to maximize the value to clients and meet their deadlines',
        'Volunteered overtime as needed to ensure on-time delivery of milestones',
        'Mentored junior developers and conducted code reviews to improve software quality',
        'Built and monitored CI/CD pipelines to ensure continuous delivery of stable releases',
        'Worked with QA personal to ensure accurate testing of new features',
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
        'Full stack development of a Java-based enterprise application for telecommunication switches',
        'Converted over 80 JSP form pages to Javascript in less than one month using a custom wrapper for the datatables.net library',
        'Employed as part of the RIT cooperative education program and retained part-time following its conclusion',
      ],
    },
  ];
};
