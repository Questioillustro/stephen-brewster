export interface ISkillItem {
  name: string;
  years: number;
}
export function useLanguagesHook(): ISkillItem[] {
  return [
    {
      name: 'Javascript',
      years: 8,
    },
    {
      name: 'Java',
      years: 5,
    },
    {
      name: 'Python',
      years: 1,
    },
    {
      name: 'CSS',
      years: 10,
    },
    {
      name: 'Typescript',
      years: 3,
    },
    {
      name: 'HTML',
      years: 10,
    },
    {
      name: 'C#',
      years: 1,
    },
    {
      name: 'Azure',
      years: 0.5,
    },
    {
      name: 'AWS',
      years: 0.25,
    },
    {
      name: 'GIT',
      years: 10,
    },
    {
      name: 'Jira',
      years: 8,
    },
    {
      name: 'Agile Development',
      years: 8,
    },
  ];
}
