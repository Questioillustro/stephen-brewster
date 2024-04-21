import { createContext, ReactNode, useState } from 'react';
import { ISkillItem, SkillTypeArray, useSkillsHook } from '../Skills.hook';

export interface ISkillsConductor {
  allSkills: ISkillItem[];
  activeFilterId: string;
  setFilter: (filterId: string) => void;
  getActiveSkills: () => ISkillItem[];
  getActiveFilterArray: () => string[];
}

export const SkillsContext = createContext<ISkillsConductor>({} as ISkillsConductor);

export const SkillsProvider = ({ children }: { children: ReactNode }) => {
  return <SkillsContext.Provider value={useSkillsConductor()}>{children}</SkillsContext.Provider>;
};

const useSkillsConductor = (): ISkillsConductor => {
  const [activeFilterId, setActiveFilterId] = useState<string>('code');

  const allSkills = useSkillsHook();

  const getActiveSkills = (): ISkillItem[] => {
    const filterKeys = skillFilters[activeFilterId];

    const active: ISkillItem[] = [];

    for (var x = 0; x < filterKeys.length; x++) {
      allSkills.filter((s) => s.skillType === filterKeys[x]).forEach((a) => active.push(a));
    }

    return active;
  };

  const getActiveFilterArray = (): string[] => {
    return skillFilters[activeFilterId];
  };

  const setFilter = (filterId: string) => {
    setActiveFilterId(filterId);
  };

  return {
    allSkills,
    activeFilterId,
    setFilter,
    getActiveSkills,
    getActiveFilterArray,
  };
};

const skillFilters = {
  ['all']: SkillTypeArray,
  ['code']: ['Front End', 'Back End', 'Database'],
  ['frontend']: ['Front End'],
  ['backend']: ['Back End'],
  ['database']: ['Database'],
  ['tools']: ['Tools'],
  ['process']: ['Process'],
};
