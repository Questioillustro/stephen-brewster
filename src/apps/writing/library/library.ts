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
];
