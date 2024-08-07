export interface ICodeItem {
  href: string;
  linkText: string;
  description: string;
}

export const useCodeHooks = (): ICodeItem[] => {
  return [
    {
      href: 'https://dev.azure.com/questioillustro/_git/StephenBrewster',
      linkText: 'This Site',
      description:
        'This site is written in React with Typescript and deployed through an Azure pipeline',
    },
    {
      href: 'https://github.com/Questioillustro/portfolio',
      linkText: 'College Coursework',
      description:
        'A collection of software projects completed as part of my coursework at RIT and MCC',
    },
    {
      href: 'https://www.codewars.com/users/Questioillustro/stats',
      linkText: 'Code Wars Profile',
      description: 'I enjoy sharpening my skills with the occasional Kata on Code Wars',
    },
  ];
};
