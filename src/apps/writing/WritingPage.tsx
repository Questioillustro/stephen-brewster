import StoryReader from '@/components/textdisplay/StoryReader';
import React, { useState, useEffect } from 'react';
import { LibraryItem, MyLibrary } from '@/apps/writing/library/library';
import { writingService } from '@/service/WritingService';

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
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (libraryItems.length === 0) {
    return <div>No content available</div>;
  }

  return (
    <div>
      {libraryItems.map((item, index) => (
        <StoryReader
          key={index} // You might want to use a more unique key like item.id if available
          author={item.author}
          content={item.content || 'No content loaded'}
          title={item.title}
        />
      ))}
    </div>
  );
};
