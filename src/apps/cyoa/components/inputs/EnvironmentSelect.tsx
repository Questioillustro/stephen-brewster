import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Box, IconButton, Paper } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

interface EnvironmentSelectorProps {
  setEnvironment: (environment: string) => void;
}

const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%; // Ensure it takes full parent width
`;

const CarouselWrapper = styled(Box)`
  overflow: hidden;
  flex: 1; // Allow it to expand to fill available space
  width: 100%; // Ensure it takes full width of the container
`;

const CarouselTrack = styled(Box)`
  display: flex;
  transition: transform 0.3s ease-in-out;
  gap: 16px;
`;

const EnvironmentSquare = styled(Box)<{ selected: boolean }>`
  width: 105px;
  height: 105px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '4px solid #1976d2' : '2px solid #ccc')};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#BBBBBB' : '#000000')};
  &:hover {
    background-color: #aaaaaa;
  }
`;

const EnvironmentImage = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const environmentList = [
  {
    _id: '1',
    name: 'Forest',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/forest_1.jpg',
    prompt: 'a dense, mysterious forest with towering trees and hidden paths',
  },
  {
    _id: '2',
    name: 'Desert',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/desert_2.jpg',
    prompt: 'a vast, scorching desert with endless dunes and rare oases',
  },
  {
    _id: '3',
    name: 'Mountain',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/mountain_3.jpg',
    prompt: 'a rugged mountain range with steep cliffs and snowy peaks',
  },
  {
    _id: '4',
    name: 'Ocean',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/ocean_4.jpg',
    prompt: 'a deep, uncharted ocean with coral reefs and sunken ships',
  },
  {
    _id: '5',
    name: 'City',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/city_5.jpg',
    prompt: 'a bustling modern city with skyscrapers and neon lights',
  },
  {
    _id: '6',
    name: 'Space Station',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/spacestation_6.jpg',
    prompt: 'a high-tech space station orbiting a distant planet',
  },
  {
    _id: '7',
    name: 'Medieval Village',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/medievalvillage_7.jpg',
    prompt: 'a quaint medieval village with cobblestone streets and thatched roofs',
  },
  {
    _id: '8',
    name: 'Jungle',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/jungle_8.jpg',
    prompt: 'a dense jungle teeming with wildlife and ancient ruins',
  },
  {
    _id: '9',
    name: 'Arctic Tundra',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/arctic_9.jpg',
    prompt: 'a frozen arctic tundra with icy plains and howling winds',
  },
  {
    _id: '10',
    name: 'Haunted Mansion',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/spookymansion_10.jpg',
    prompt: 'a creepy, abandoned mansion filled with ghostly secrets',
  },
  {
    _id: '11',
    name: 'Underground Cave',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/cave_11.jpg',
    prompt: 'a sprawling underground cave system with glowing crystals',
  },
  {
    _id: '12',
    name: 'Floating Islands',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/islands_12.jpg',
    prompt: 'a magical realm of floating islands connected by vine bridges',
  },
  {
    _id: '13',
    name: 'Post-Apocalyptic Wasteland',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/wasteland_13.jpg',
    prompt: 'a barren post-apocalyptic wasteland with ruined cities',
  },
  {
    _id: '14',
    name: 'Steampunk City',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/steampunkcity_14.jpg',
    prompt: 'a steampunk city powered by gears and steam engines',
  },
  {
    _id: '15',
    name: 'Volcanic Island',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/volcano_15.jpg',
    prompt: 'a volatile volcanic island with lava flows and ash-filled skies',
  },
  {
    _id: '16',
    name: 'Sky City',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/cloudcity_16.jpg',
    prompt: 'a futuristic city suspended among the clouds',
  },
  {
    _id: '17',
    name: 'Ancient Temple',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/temple_17.jpg',
    prompt: 'an ancient temple filled with traps and forgotten deities',
  },
  {
    _id: '18',
    name: 'Swamp',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/swamp_18.jpg',
    prompt: 'a murky swamp with twisted trees and hidden dangers',
  },
  {
    _id: '19',
    name: 'Alien Planet',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/alienplanet_19.jpg',
    prompt: 'a strange alien planet with bizarre flora and fauna',
  },
  {
    _id: '20',
    name: 'Pirate Cove',
    imageUrl: 'https://azurefunctionsapp2022060.blob.core.windows.net/cyoa/piratecove_20.jpg',
    prompt: 'a hidden pirate cove with docked ships and buried treasure',
  },
];

const EnvironmentSelect: React.FC<EnvironmentSelectorProps> = ({ setEnvironment }) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>(environmentList[0].name);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 5;
  const itemWidth = 96; // 80px (width) + 16px (gap)
  const maxScroll = (environmentList.length - itemsPerView) * itemWidth;

  const handleEnvironmentClick = (environment: (typeof environmentList)[0]) => {
    setSelectedEnvironment(environment.name);
    setEnvironment(`The story setting is: ${environment.prompt}.`);
  };

  const scrollLeft = () => {
    const newPosition = Math.max(scrollPosition - itemWidth * itemsPerView, 0);
    setScrollPosition(newPosition);
  };

  const scrollRight = () => {
    const newPosition = Math.min(scrollPosition + itemWidth * itemsPerView, maxScroll);
    setScrollPosition(newPosition);
  };

  return (
    <Box sx={{ width: '100%', pb: 2 }}>
      <Typography variant={'h6'} sx={{ p: 2 }}>
        Choose a Setting!
      </Typography>

      <Container>
        <IconButton onClick={scrollLeft} disabled={scrollPosition === 0} sx={{ mr: 1 }}>
          <ChevronLeft />
        </IconButton>

        <CarouselWrapper ref={carouselRef}>
          <CarouselTrack
            sx={{
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {environmentList.map((environment) => (
              <Box>
                <EnvironmentSquare
                  key={environment._id}
                  selected={selectedEnvironment === environment.name}
                  onClick={() => handleEnvironmentClick(environment)}
                >
                  <EnvironmentImage src={environment.imageUrl} alt={environment.name} />
                </EnvironmentSquare>
              </Box>
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <IconButton onClick={scrollRight} disabled={scrollPosition >= maxScroll} sx={{ ml: 1 }}>
          <ChevronRight />
        </IconButton>
      </Container>
    </Box>
  );
};

export default EnvironmentSelect;
