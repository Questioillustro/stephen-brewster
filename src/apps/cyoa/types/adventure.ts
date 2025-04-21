export interface IAdventureWrapper {
  _id: string;
  contextPrompts: string;
  storyPrompts: string;
  adventure: IAdventure;
  artStyle: string;
}

export interface IAdventurePage {
  text: string;
  imagePrompt: string;
  imageUrl?: string;
}

export interface IAdventure {
  pages: IAdventurePage[];
  title: string;
}
