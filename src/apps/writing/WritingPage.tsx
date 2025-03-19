import React, { useState, useEffect } from 'react';
import { LibraryItem, MyLibrary } from '@/apps/writing/library/library';
import { writingService } from '@/service/WritingService';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TileGrid } from '@/apps/writing/TileGrid';

const Message = styled.div`
  ${({ theme }) => css`
    color: #e0e0e0;
    padding: 20px;
  `}
`;

export const WritingPage: React.FC = () => {
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const loadedItems = await writingService.loadWritingItems(MyLibrary);
        setLibraryItems(loadedItems);
      } catch (err) {
        setError('Failed to load story content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>{error}</Message>;
  }

  if (libraryItems.length === 0) {
    return <Message>No content available</Message>;
  }

  return (
    <div>
      <TileGrid items={libraryItems} />
    </div>
  );
};
