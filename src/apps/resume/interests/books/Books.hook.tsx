export interface IBookItem {
  name: string;
  image: string;
}

export const useBooksHook = (): IBookItem[] => {
  return [
    {
      name: 'Dune',
      image: '/books/dune.jpeg',
    },
    {
      name: 'The Dark Tower',
      image: '/books/darktower.jpeg',
    },
    {
      name: "Ender's Game",
      image: '/books/endersgame.jpeg',
    },
    {
      name: 'Hyperion',
      image: '/books/hyperion.jpg',
    },
    {
      name: 'Red Rising',
      image: '/books/redrising.jpeg',
    },
    {
      name: 'Shannara',
      image: '/books/shannara.jpeg',
    },
    {
      name: 'The Stormlight Archive',
      image: '/books/stormlight.jpeg',
    },
    {
      name: 'We Are Legion (We Are Bob)',
      image: '/books/wearebob.jpeg',
    },
    {
      name: "Hitchhiker's Guide to the Galaxy",
      image: '/books/hitchhikers.jpeg',
    },
    {
      name: "Can't Hurt Me",
      image: '/books/goggins.jpeg',
    },
  ];
};
