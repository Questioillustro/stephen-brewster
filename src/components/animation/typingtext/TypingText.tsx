import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 20, delay = 200 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setIndex((prevIndex) => {
          if (prevIndex >= text.length) {
            clearInterval(typingInterval);
            return prevIndex;
          }
          setDisplayedText(text.slice(0, prevIndex + 1));
          return prevIndex + 1;
        });
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, speed, delay]);

  return <span>{displayedText}</span>;
};

export default TypingText;
