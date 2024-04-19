export interface ITravelItem {
  name: string;
  displayImage: string;
  year: number;
  images: string[];
}

export const useTravelsHook = (): ITravelItem[] => {
  return [
    {
      name: 'Grand Canyon',
      displayImage: '/grandcanyon/grandcanyon-wide_shot.jpg',
      year: 2016,
      images: [
        '/grandcanyon/grandcanyon-wide_shot.jpg',
        '/grandcanyon/grandcanyon-selfie_1.jpg',
        '/grandcanyon/grandcanyon-scenic_1.jpg',
        '/grandcanyon/grandcanyon-scenic_2.jpg',
        '/grandcanyon/grandcanyon-scenic_3.jpg',
        '/grandcanyon/grandcanyon-finishline.jpg',
      ],
    },
    {
      name: 'Peru',
      displayImage: '/peru/peru-ruins_window.jpg',
      year: 2018,
      images: [
        '/peru/peru-ruins_window.jpg',
        '/peru/peru-winaywayna_1.jpg',
        '/peru/peru-winaywayna_2.jpg',
        '/peru/peru-machu_picchu_1.jpg',
        '/peru/peru-cusco.jpg',
        '/peru/peru-intipata.jpg',
      ],
    },
    {
      name: 'Africa',
      displayImage: '/africa/africa-giraffe_sunset.jpg',
      year: 2022,
      images: ['/africa/africa-giraffe_sunset.jpg'],
    },
  ];
};
