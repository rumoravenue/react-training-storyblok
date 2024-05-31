import { storyblokEditable, SbBlokData } from '@storyblok/react';
import React from 'react';

interface CaseStudyItemProps extends SbBlokData {
  Image: {
    filename: string;
  };
  Title: string;
  Description: string;
  Button_1: string;
  Button_2: string;
}

interface CaseStudyBlokProps extends SbBlokData {
  body: CaseStudyItemProps[];
}

interface CaseStudieProps {
  blok: CaseStudyBlokProps;
}

const CaseStudie: React.FC<CaseStudieProps> = ({ blok }) => {
  return (
    <div
      className='flex w-full flex-wrap justify-center gap-5'
      {...storyblokEditable(blok)}
    >
      {blok.body.map((item, index) => (
        <div
          key={index}
          className='card-container flex w-full flex-col items-center rounded-lg border-2 border-gray-400 text-start transition-transform duration-300 ease-in-out hover:scale-105 sm:w-[48%] md:w-[29%]'
        >
          <div className='flex h-56 w-full items-center justify-center rounded-t-lg bg-black'>
            <img
              className='h-48 w-10/12 object-contain'
              src={item.Image.filename}
              alt={item.Title}
            />
          </div>
          <div className='mt-4 ml-5 flex gap-3 text-start text-xs'>
            <button className='rounded-3xl border-[1px] border-gray-500 p-1 px-3'>
              {item.Button_1}
            </button>
            <button className='rounded-3xl border-[1px] border-gray-500 p-1 px-3'>
              {item.Button_2}
            </button>
          </div>
          <div className='ml-4 mt-2 text-start font-medium'>
            <p>
              <span className='underline'>{item.Title}</span>
              {' - ' + item.Description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudie;
