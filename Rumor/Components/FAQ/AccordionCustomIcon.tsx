import { ISbRichtext, SbBlokData } from '@storyblok/react';
import React from 'react';
import { Richtext } from '../../../components/Richtext';
interface sbFAQprops extends SbBlokData {
  question?: ISbRichtext;
  answer?: ISbRichtext;
}

interface sbFAQprops {
  blok: sbFAQprops;
}
const AccordionCustomIcon: React.FC<sbFAQprops> = ({ blok }) => {
  const { question, answer } = blok;
  return (
    <div>
      <div className='min-h-sceen mx-auto max-w-screen-xl bg-gray-400 px-5'>
        <div className='mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200'>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <Richtext content={question} />
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>

              <Richtext
                content={answer}
                className='group-open:animate-fadeIn mt-3 text-neutral-600'
              />
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionCustomIcon;
