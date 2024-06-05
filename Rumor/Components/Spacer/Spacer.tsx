import { SbBlokData, storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';
import React from 'react';

interface sbSpacerProps extends SbBlokData {
  spaceHeight?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

interface spacerProps {
  blok: sbSpacerProps;
}

const Spacer: React.FC<spacerProps> = ({ blok }) => {
  const { spaceHeight } = blok;

  return (
    <div
      className={clsx(
        'spacer',
        spaceHeight === 'sm' && 'h-4',
        spaceHeight === 'md' && 'h-10',
        spaceHeight === 'lg' && 'h-14',
        spaceHeight === 'xl' && 'h-24',
        spaceHeight === 'xxl' && 'h-28'
      )}
      {...storyblokEditable(blok)}
    ></div>
  );
};

export default Spacer;
