import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';

export interface SbBlogPostProps extends SbBlokData {
  text: string;
  icons: {
    filename: string;
  };
  color: {
    color: string;
  };
}
interface IProps {
  blok: SbBlogPostProps;
}

export const TechnologiesItem: React.FC<IProps> = ({ blok }) => (
  <div
    className='mx-[3%] h-[100%] w-[95%] rounded-lg p-[5%]  transition-colors duration-300'
    style={{ backgroundColor: blok.color.color }}
  >
    <img src={blok.icons.filename} className='h-auto max-w-full' />
    <p className='mt-[96%] text-left text-black'>{blok.text}</p>
  </div>
);
