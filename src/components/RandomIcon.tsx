import React, { useEffect, useRef } from 'react';
import jazzicon from 'jazzicon';

interface RandomIconProps {
  address: string;
}

const RandomIcon: React.FC<RandomIconProps> = ({ address }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const defaultSize = 27; // Default size value

  useEffect(() => {
    const addressNumber = parseInt(address.slice(2), 16);
    const icon = jazzicon(defaultSize, addressNumber);

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(icon);
    }
  }, [address, defaultSize]);

  return <div ref={containerRef}></div>;
};

export default RandomIcon;
