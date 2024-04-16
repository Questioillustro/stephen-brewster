export interface IEducationItem {
  school: string;
  honor?: string;
  gpa: number;
  gpaMax: number;
  graduationDate: string;
}
export const useEducationHook = (): IEducationItem[] => {
  return [
    {
      school: 'Rochester Institute of Technology',
      honor: 'Magna Cum Laude',
      gpa: 3.72,
      gpaMax: 4,
      graduationDate: 'May 2015',
    },
    {
      school: 'Monroe Community College',
      gpa: 3.71,
      gpaMax: 4,
      graduationDate: 'December 2011',
    },
  ];
};
