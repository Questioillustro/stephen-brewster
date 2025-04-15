import { createContext, useContext, useState } from 'react';
import { IStory } from '@/apps/cyoa/api/StoryService';
import { IAdventure } from '@/apps/cyoa/api/AdventureService';

export type StoryType = 'adventure' | 'education';

interface StoryContextType {
  allStories: IStory[];
  setStories: (stories: IStory[]) => void;
  selectedStory: IStory | undefined;
  setStory: (story: IStory) => void;
  selectedType: StoryType;
  setType: (type: StoryType) => void;
  allAdventures: IAdventure[];
  setAdventures: (adventures: IAdventure[]) => void;
  selectedAdventure: IAdventure | undefined;
  setAdventure: (adventure: IAdventure) => void;
}

export const StoryContext = createContext<StoryContextType | undefined>(undefined);

export function StoryProvider({ children }) {
  const [allStories, setAllStories] = useState<IStory[]>([]);

  const [selectedStory, setSelectedStory] = useState<IStory>();

  const [selectedType, setSelectedType] = useState<StoryType>('adventure');

  const [allAdventures, setAllAdventures] = useState<IAdventure[]>([]);

  const [selectedAdventure, setSelectedAdventure] = useState<IAdventure>();

  const setStories = (stories: IStory[]) => {
    console.log('setting stories', stories);
    setAllStories(stories);
  };

  const setStory = (story: IStory) => {
    console.log('setting story', story);
    setSelectedStory(story);
  };

  const setType = (type: StoryType) => {
    console.log('setting story type', type);
    setSelectedType(type);
  };

  const setAdventures = (adventures: IAdventure[]) => {
    console.log('setting adventures', adventures);
    setAllAdventures(adventures);
  };

  const setAdventure = (adventure: IAdventure) => {
    console.log('setting adventure', adventure);
    setSelectedAdventure(adventure);
  };

  const value = {
    allStories,
    setStories,
    selectedStory,
    setStory,
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
