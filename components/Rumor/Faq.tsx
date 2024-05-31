import { storyblokEditable } from '@storyblok/react';
import React from 'react';

const FAQItem = ({ text1, text2 }) => (
  <>
    <div className='py-5'>
      <hr className='w-full border-[1px] border-gray-400' />
      <details className='group'>
        <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
          <span>{text1}</span>
          <span className='transition group-open:rotate-180'>
            <svg
              fill='none'
              height='24'
              shapeRendering='geometricPrecision' // Corrected here
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width='24'
            >
              <path d='M6 9l6 6 6-6'></path>
            </svg>
          </span>
        </summary>
        <p className='group-open:animate-fadeIn mt-2 text-start text-neutral-600 '>
          {text2}
        </p>
      </details>
    </div>
  </>
);

const FAQ = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className='flex w-full flex-col items-center'
    >
      <div className='w-full px-6 pb-3'>
        <div className='mx-auto px-5'>
          <div className='mt-2 grid divide-y divide-neutral-200'>
            {blok.body.map((item, index) => (
              <FAQItem key={index} text1={item.text_1} text2={item.text_2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
