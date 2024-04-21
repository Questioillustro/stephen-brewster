export interface ISkillItem {
  name: string;
  years: number;
  skillType: SkillType;
}

export type SkillType =
  | 'Front End'
  | 'Back End'
  | 'Database'
  | 'Cloud'
  | 'Process'
  | 'Architecture & Patterns'
  | 'Tools';

export const SkillTypeArray = [
  'Front End',
  'Back End',
  'Database',
  'Cloud',
  'Process',
  'Architecture & Patterns',
  'Tools',
];

export function useSkillsHook(): ISkillItem[] {
  return [
    {
      name: 'Javascript',
      years: 10,
      skillType: 'Front End',
    },
    {
      name: 'Java',
      years: 5,
      skillType: 'Back End',
    },
    {
      name: 'Python',
      years: 1,
      skillType: 'Back End',
    },
    {
      name: 'CSS',
      years: 10,
      skillType: 'Front End',
    },
    {
      name: 'Typescript',
      years: 3,
      skillType: 'Front End',
    },
    {
      name: 'HTML',
      years: 10,
      skillType: 'Front End',
    },
    {
      name: 'C#',
      years: 2,
      skillType: 'Back End',
    },
    {
      name: 'Azure',
      years: 0.5,
      skillType: 'Cloud',
    },
    {
      name: 'AWS',
      years: 0.1,
      skillType: 'Cloud',
    },
    {
      name: 'Git',
      years: 10,
      skillType: 'Process',
    },
    {
      name: 'Jira',
      years: 8,
      skillType: 'Process',
    },
    {
      name: 'Agile Development',
      years: 10,
      skillType: 'Process',
    },
    {
      name: 'Splunk',
      years: 1,
      skillType: 'Tools',
    },
    {
      name: 'Java Spring',
      years: 2,
      skillType: 'Back End',
    },
    {
      name: 'Angular',
      years: 3,
      skillType: 'Front End',
    },
    {
      name: 'React',
      years: 2,
      skillType: 'Front End',
    },
    {
      name: 'SQL',
      years: 4,
      skillType: 'Database',
    },
    {
      name: 'MongoDB',
      years: 1,
      skillType: 'Database',
    },
    {
      name: 'Node.js',
      years: 0.5,
      skillType: 'Back End',
    },
    {
      name: 'Express.js',
      years: 0.5,
      skillType: 'Back End',
    },
    {
      name: 'ASP.NET Razor',
      years: 0.5,
      skillType: 'Front End',
    },
    {
      name: 'Microservices Architecture',
      years: 1,
      skillType: 'Architecture & Patterns',
    },
    {
      name: 'Embedded C',
      years: 1,
      skillType: 'Back End',
    },
    {
      name: 'RESTful API',
      years: 3,
      skillType: 'Back End',
    },
    {
      name: 'Responsive Design',
      years: 5,
      skillType: 'Front End',
    },
    {
      name: 'Turbo Basic',
      years: 2,
      skillType: 'Back End',
    },
  ];
}
