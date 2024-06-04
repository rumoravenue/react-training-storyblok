import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';

export interface ProcessProps extends SbBlokData {
  heading: string;
  description: string;
  seriesNumber: number;
}
interface PProps {
  blok: ProcessProps;
}

const ProcessItem: React.FC<PProps> = ({ blok }) => {
  return (
    <div className='bg-black px-[13%] pt-[3%] text-white'>
      <div className='flex items-start pb-[20px]'>
        <div className='pr-[9%] text-2xl text-yellow-500'>
          {blok.seriesNumber}
        </div>
        <div className='flex w-full flex-row'>
          <div className='mr-[7%] flex-1 pb-[5px] text-left text-2xl'>
            {blok.heading}
          </div>
          <div className='flex-7 pl-[8%] text-start text-sm'>
            {blok.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
