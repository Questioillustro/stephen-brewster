import StoryReader from '@/components/textdisplay/StoryReader';
import React, { useState } from 'react';
import { LibraryItem } from '@/apps/writing/library/library';
import { BackButton, GridContainer, Tile } from '@/apps/writing/TileGrid.styles';

interface TileGridProps {
  items: LibraryItem[];
}

export const TileGrid: React.FC<TileGridProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);

  if (selectedItem) {
    return (
      <div>
        <BackButton onClick={() => setSelectedItem(null)}>Back to Grid</BackButton>
        <StoryReader
          author={selectedItem.author}
          content={selectedItem.content || 'No content loaded'}
          title={selectedItem.title}
        />
      </div>
    );
  }

  return (
    <GridContainer>
      {items.map((item, index) => (
        <Tile key={index} onClick={() => setSelectedItem(item)}>
          <h3>{item.title}</h3>
        </Tile>
      ))}
    </GridContainer>
  );
};
