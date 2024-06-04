import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import Button from '../components/Button';

export interface SbBlogPostProps extends SbBlokData {
  text: string;
  description: string;
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

export const CaseStudyItem: React.FC<IProps> = ({ blok }) => {
 

  return (
    <div
      className='h-[100%] w-full flex flex-col rounded-t-[50px] border border-solid'
      style={{ borderWidth: '2px', borderColor: 'gray' }}
    >
      <div
        className='rounded-lg p-[24px] transition-colors duration-300'
        style={{ backgroundColor: 'black' }}
      >
        <img src={blok.icons.filename} className='h-auto max-w-full' />
      </div>
      <div className='flex-1 flex flex-col'>
        <div className='my-[1.5rem] flex  flex-row px-4'>
          <button
            className='mr-2 flex-1 rounded-lg border border-black bg-transparent py-[1px] text-black hover:bg-gray-200'
            style={{ borderRadius: '50px' }}
          >
            {blok.text}
          </button>

          <button
            className='ml-2 flex-1 rounded-lg border border-black py-[1px] text-gray-500 hover:bg-gray-200'
            style={{ borderRadius: '50px' }}
          >
            5 Min Read
          </button>
        </div>
        <div className='m-[2rem]  flex-1'>{blok.description}</div>
      </div>
    </div>
  );
};
