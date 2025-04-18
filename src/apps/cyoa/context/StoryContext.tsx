import { createContext, useContext, useState } from 'react';
import { IAdventureWrapper } from '@/apps/cyoa/api/AdventureService';

export type StoryType = 'adventure' | 'education';

interface StoryContextType {
  selectedType: StoryType;
  setType: (type: StoryType) => void;
  allAdventures: IAdventureWrapper[];
  setAdventures: (adventures: IAdventureWrapper[]) => void;
  selectedAdventure: IAdventureWrapper | undefined;
  setAdventure: (adventure: IAdventureWrapper) => void;
}

export const StoryContext = createContext<StoryContextType | undefined>(undefined);

export function StoryProvider({ children }) {
  const [selectedType, setSelectedType] = useState<StoryType>('adventure');

  const [allAdventures, setAllAdventures] = useState<IAdventureWrapper[]>([]);

  const [selectedAdventure, setSelectedAdventure] = useState<IAdventureWrapper>();

  const setType = (type: StoryType) => {
    console.log('setting story type', type);
    setSelectedType(type);
  };

  const setAdventures = (adventures: IAdventureWrapper[]) => {
    console.log('setting adventures', adventures);
    setAllAdventures(adventures);
  };

  const setAdventure = (adventure: IAdventureWrapper) => {
    console.log('setting adventure', adventure);
    setSelectedAdventure(adventure);
  };

  const value = {
    selectedType,
    setType,
    allAdventures,
    setAdventures,
    selectedAdventure,
    setAdventure,
  };

  return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>;
}

export function useStoryContext(): StoryContextType {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error('useStoryContext must be used within a StoryProvider');
  }
  return context;
}
