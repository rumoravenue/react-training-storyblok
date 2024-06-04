import { SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import { SBColor } from '../../types';
import Image from 'next/image';
import downloadIcon from '../../public/Icon (1).png';

export interface FaqProps extends SbBlokData {
  backgroundcolour: SBColor;
  color: SBColor;
  question: {
    description: string;
  }[];
}

interface IProps {
  blok: FaqProps;
}

const FaqPage: React.FC<IProps> = ({ blok }) => {
  const backgroundColor = blok.backgroundcolour
    ? blok.backgroundcolour.color
    : 'transparent';
  const color = blok.color ? blok.color.color : 'transparent';

  return (
    <div
      style={{ backgroundColor, color }}
      className={`p-5 lg:py-5 lg:pl-10 lg:pr-5`}
    >
      <div className='mx-[4%] my-[1%] border-b border-black'></div>

      {blok.question.map((item, index) => (
        <div key={index} className="py-1 px-2 lg:px-12 ">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center text-xs lg:font-medium  justify-between font-normal lg:text-base">
              <span>  {item.description}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn text-start text-neutral-600">
              {item.description}
            </p>
          </details>
          <div className=' my-[1%]  border-b border-black'></div>
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
