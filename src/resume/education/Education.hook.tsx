export interface IEducationItem {
  school: string;
  website: string;
  honor?: string;
  gpa: number;
  gpaMax: number;
  graduationDate: string;
}
export const useEducationHook = (): IEducationItem[] => {
  return [
    {
      school: 'Rochester Institute of Technology',
      website: 'https://www.rit.edu/',
      honor: 'Magna Cum Laude',
      gpa: 3.72,
      gpaMax: 4,
      graduationDate: 'May 2015',
    },
    {
      school: 'Monroe Community College',
      website: 'https://www.monroecc.edu/',
      gpa: 3.71,
      gpaMax: 4,
      graduationDate: 'December 2011',
    },
  ];
};
