import React from 'react';
import { storyblokEditable } from '@storyblok/react';

interface TestimonialProps {
  blok: {
    content?: string;
    author?: string;
    position?: string;
    company?: string;
    icons?: {
      filename?: string;
    };
  };
}

const Testimonial: React.FC<TestimonialProps> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className='testimonial-slide rounded bg-black p-4 text-white shadow-md'
    >
      <div className='flex items-center py-[2%]'>
        <div className='h-px flex-1 bg-gray-500'></div>
        <div className='h-px w-1/2 bg-white'></div>
        <div className='h-px flex-1 bg-gray-500'></div>
      </div>
      <p className='testimonial-content mb-4 px-[5%] pb-[2%] text-center text-sm  lg:px-[33%] lg:text-lg'>
        {blok.content}
      </p>
      <div className='mb-4 flex items-center justify-center'>
        <div className='flex-1'></div>
        {blok.icons && blok.icons.filename && (
          <img
            src={blok.icons.filename}
            alt='icon'
            className='mx-4 h-12 w-12 rounded-full '
          />
        )}
        <div className='flex-1 text-left text-xs lg:text-sm'>
          <p>{blok.author}</p>
          <p>
            {blok.position}, {blok.company}
          </p>
        </div>
        <div className='flex-1'></div>
      </div>
      <div className='flex items-center  py-[2%]'>
        <div className='h-px flex-1 bg-gray-500'></div>
        <div className='h-px w-1/4 bg-white'></div>
        <div className='h-px flex-1 bg-gray-500'></div>
      </div>
    </div>
  );
};

export default Testimonial;
