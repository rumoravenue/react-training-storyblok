import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';
import React from 'react';

interface sbListGroupProps extends SbBlokData {
  content?: SbBlokData[];
}

interface listGroupProps {
  blok: sbListGroupProps;
}

const ListGroup: React.FC<listGroupProps> = ({ blok }) => {
  
  return (
    <div {...storyblokEditable(blok)} className='listgroup flex flex-col items-center justify-center gap-11 '>
      {blok.content.map((nestedBlok , index) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} index={index}{...storyblokEditable(blok)}/>
      ))}
    </div>
  );
};

export default ListGroup;
