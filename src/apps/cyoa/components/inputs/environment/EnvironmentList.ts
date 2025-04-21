import { CarouselItem } from '@/apps/cyoa/components/carousel/CarouselSelector';

export interface IEnvironmentItem {
  _id: string;
  name: string;
  imageUrl: string;
  prompt: string;
}

export const mapEnvironmentToCarouselItem = (
  environment: (typeof EnvironmentList)[0],
): CarouselItem => {
  return {
    id: environment._id,
    name: environment.name,
    imageUrl: environment.imageUrl,
    prompt: environment.prompt,
  };
};

export const EnvironmentList: IEnvironmentItem[] = [
  {
    _id: '1',
    name: 'Forest',
    imageUrl: '/bav/forest_1.jpg',
    prompt: 'a dense, mysterious forest with towering trees and hidden paths',
  },
  {
    _id: '2',
    name: 'Desert',
    imageUrl: '/bav/desert_2.jpg',
    prompt: 'a vast, scorching desert with endless dunes and rare oases',
  },
  {
    _id: '3',
    name: 'Mountain',
    imageUrl: '/bav/mountain_3.jpg',
    prompt: 'a rugged mountain range with steep cliffs and snowy peaks',
  },
  {
    _id: '4',
    name: 'Ocean',
    imageUrl: '/bav/ocean_4.jpg',
    prompt: 'a deep, uncharted ocean with coral reefs and sunken ships',
  },
  {
    _id: '5',
    name: 'City',
    imageUrl: '/bav/city_5.jpg',
    prompt: 'a bustling modern city with skyscrapers and neon lights',
  },
  {
    _id: '6',
    name: 'Space Station',
    imageUrl: '/bav/spacestation_6.jpg',
    prompt: 'a high-tech space station orbiting a distant planet',
  },
  {
    _id: '7',
    name: 'Medieval Village',
    imageUrl: '/bav/medievalvillage_7.jpg',
    prompt: 'a quaint medieval village with cobblestone streets and thatched roofs',
  },
  {
    _id: '8',
    name: 'Jungle',
    imageUrl: '/bav/jungle_8.jpg',
    prompt: 'a dense jungle teeming with wildlife and ancient ruins',
  },
  {
    _id: '9',
    name: 'Arctic Tundra',
    imageUrl: '/bav/arctic_9.jpg',
    prompt: 'a frozen arctic tundra with icy plains and howling winds',
  },
  {
    _id: '10',
    name: 'Haunted Mansion',
    imageUrl: '/bav/spookymansion_10.jpg',
    prompt: 'a creepy, abandoned mansion filled with ghostly secrets',
  },
  {
    _id: '11',
    name: 'Underground Cave',
    imageUrl: '/bav/cave_11.jpg',
    prompt: 'a sprawling underground cave system with glowing crystals',
  },
  {
    _id: '12',
    name: 'Floating Islands',
    imageUrl: '/bav/islands_12.jpg',
    prompt: 'a magical realm of floating islands connected by vine bridges',
  },
  {
    _id: '13',
    name: 'Post-Apocalyptic Wasteland',
    imageUrl: '/bav/wasteland_13.jpg',
    prompt: 'a barren post-apocalyptic wasteland with ruined cities',
  },
  {
    _id: '14',
    name: 'Steampunk City',
    imageUrl: '/bav/steampunkcity_14.jpg',
    prompt: 'a steampunk city powered by gears and steam engines',
  },
  {
    _id: '15',
    name: 'Volcanic Island',
    imageUrl: '/bav/volcano_15.jpg',
    prompt: 'a volatile volcanic island with lava flows and ash-filled skies',
  },
  {
    _id: '16',
    name: 'Sky City',
    imageUrl: '/bav/cloudcity_16.jpg',
    prompt: 'a futuristic city suspended among the clouds',
  },
  {
    _id: '17',
    name: 'Ancient Temple',
    imageUrl: '/bav/temple_17.jpg',
    prompt: 'an ancient temple filled with traps and forgotten deities',
  },
  {
    _id: '18',
    name: 'Swamp',
    imageUrl: '/bav/swamp_18.jpg',
    prompt: 'a murky swamp with twisted trees and hidden dangers',
  },
  {
    _id: '19',
    name: 'Alien Planet',
    imageUrl: '/bav/alienplanet_19.jpg',
    prompt: 'a strange alien planet with bizarre flora and fauna',
  },
  {
    _id: '20',
    name: 'Pirate Cove',
    imageUrl: '/bav/piratecove_20.jpg',
    prompt: 'a hidden pirate cove with docked ships and buried treasure',
  },
];

// Example usage: Convert the entire environmentList
export const envCarouselItems: CarouselItem[] = EnvironmentList.map(mapEnvironmentToCarouselItem);
