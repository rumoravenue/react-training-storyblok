import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Spacer = ({ blok, backgroundColor }) => {
  const height = blok.height;
  return (
    <div {...storyblokEditable(blok)}>
      <div
        style={{ height: `${height}rem`, backgroundColor: backgroundColor }}
        className=' bg-transparent'
      ></div>
    </div>
  );
};

export default Spacer;
