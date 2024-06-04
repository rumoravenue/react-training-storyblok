import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import { Asset } from '../../types';

export interface SbBlogPostProps extends SbBlokData {
  media: Asset;
}
interface IProps {
  blok: SbBlogPostProps;
}

const AboutPage: React.FC<IProps> = ({ blok }) => {
  return (
    <div
      className='h-[280px] text-center text-black'
      {...storyblokEditable(blok)}
    >
      <img
        className='z-[-1] h-auto w-[80%] translate-x-[10%] -translate-y-[45%] transform'
        src={blok.media.filename}
        alt='Media'
      />
    </div>
  );
};

export default AboutPage;
