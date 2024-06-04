import React from 'react';
import { SBColor } from '../types';

interface SpacerProps {
  blok: {
    height: number;
  };
}

const Spacer: React.FC<SpacerProps> = ({ blok }) => {
  return (
    <div
      style={{
        height: `${blok.height}rem`,
        width: '100%',
      }}
    ></div>
  );
};
export default Spacer;
