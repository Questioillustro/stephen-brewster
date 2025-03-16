export interface ISkillItem {
  name: string;
  years: number;
  skillType: SkillType;
  practicedAt?: string[];
}

export type SkillType =
  | 'Front End'
  | 'Back End'
  | 'Database'
  | 'Cloud'
  | 'Process'
  | 'Architecture'
  | 'Tools';

export const SkillTypeArray = [
  'Front End',
  'Back End',
  'Database',
  'Cloud',
  'Process',
  'Architecture',
  'Tools',
];

export function useSkillsHook(): ISkillItem[] {
  return [
    {
      name: 'Javascript',
      years: 11,
      skillType: 'Front End',
    },
    {
      name: 'Java',
      years: 15,
      skillType: 'Back End',
    },
    {
      name: 'Python',
      years: 2,
      skillType: 'Back End',
    },
    {
      name: 'CSS',
      years: 15,
      skillType: 'Front End',
    },
    {
      name: 'Typescript',
      years: 5,
      skillType: 'Front End',
    },
    {
      name: 'HTML',
      years: 15,
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
      skillType: 'Tools',
    },
    {
      name: 'Jira',
      years: 8,
      skillType: 'Tools',
    },
    {
      name: 'Agile',
      years: 9,
      skillType: 'Process',
    },
    {
      name: 'Splunk',
      years: 2,
      skillType: 'Tools',
    },
    {
      name: 'Java Spring',
      years: 2,
      skillType: 'Back End',
    },
    {
      name: 'Angular',
      years: 4,
      skillType: 'Front End',
    },
    {
      name: 'React',
      years: 3,
      skillType: 'Front End',
    },
    {
      name: 'SQL',
      years: 9,
      skillType: 'Database',
    },
    {
      name: 'MongoDB',
      years: 2,
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
      skillType: 'Architecture',
    },
    {
      name: 'Embedded C',
      years: 1,
      skillType: 'Back End',
    },
    {
      name: 'RESTful API',
      years: 5,
      skillType: 'Architecture',
    },
    {
      name: 'Responsive Design',
      years: 5,
      skillType: 'Architecture',
    },
    {
      name: 'Turbo Basic',
      years: 2,
      skillType: 'Back End',
    },
    {
      name: 'IntelliJ / Rider',
      years: 8,
      skillType: 'Tools',
    },
    {
      name: 'Visual Studio',
      years: 0.5,
      skillType: 'Tools',
    },
    {
      name: 'Docker',
      years: 2,
      skillType: 'Tools',
    },
    {
      name: 'AI Prompt Engineering',
      years: 1,
      skillType: 'Tools',
    },
    {
      name: 'CI / CD',
      years: 9,
      skillType: 'Process',
    },
  ];
}
