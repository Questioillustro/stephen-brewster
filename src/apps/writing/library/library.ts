export interface LibraryItem {
  fileName: string;
  title: string;
  author: string;
  content?: string;
}
export const MyLibrary: LibraryItem[] = [
  {
    fileName: 'bridge_builder.txt',
    title: 'Myth of the Bridge Builder',
    author: 'Stephen Brewster & Grok 3',
  },
  {
    fileName: 'globalist_hydra.txt',
    title: 'Myth of the Globalist Hydra',
    author: 'Stephen Brewster & Grok 3',
  },
];
