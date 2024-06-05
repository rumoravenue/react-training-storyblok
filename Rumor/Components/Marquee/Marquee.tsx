import {
  ISbRichtext,
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import React from 'react';
import { Richtext } from '../../../components/Richtext';

interface sbMarqueeProps extends SbBlokData {
  marqueeText?: ISbRichtext;
}

interface marqueeProps {
  blok: sbMarqueeProps;
}

const Marquee: React.FC<marqueeProps> = ({ blok }) => {
  const { marqueeText } = blok;
  return (
    <>
      <div
        {...storyblokEditable(blok)}
        className='w-full overflow-hidden whitespace-nowrap relative h-28'
      >
        <div className='animate-marquee flex space-x-4'>
          <div className='inline-block'>
            <Richtext content={marqueeText} />
          </div>
          <div className='inline-block'>
            <Richtext content={marqueeText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
