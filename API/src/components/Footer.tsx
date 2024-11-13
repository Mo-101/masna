import React, { useEffect, useRef } from 'react';
import { Sun, Thermometer } from 'lucide-react';

const Footer = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth;
      const animationDuration = scrollWidth / 30; // Adjust speed here (lower number = faster)

      scrollElement.style.animationDuration = `${animationDuration}s`;
    }
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-2 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        <div className="flex items-center space-x-4 mr-8">
          <Sun className="h-5 w-5 text-yellow-400 flex-shrink-0" />
          <span>Average sighting density: 3.2 per km²</span>
        </div>
        <div className="flex items-center space-x-4">
          <Thermometer className="h-5 w-5 text-red-500 flex-shrink-0" />
          <span>Temperature trend: +1.5°C</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;