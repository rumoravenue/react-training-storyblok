import {
  ISbRichtext,
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import React from 'react';
import TechnologyCard from '../TechnologyCard/TechnologyCard';
import { Richtext } from '../../../components/Richtext';
import clsx from 'clsx';

interface sbTechnoloyProps extends SbBlokData {
  techTitle?: ISbRichtext;
  technologyCards?: SbBlokData[];
  techBottom?: ISbRichtext;
}

interface TechnologyPorps {
  blok: sbTechnoloyProps;
}

const Technology: React.FC<TechnologyPorps> = ({ blok }) => {
  const { techTitle, technologyCards, techBottom } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      className='flex flex-col items-center gap-24 bg-black py-28'
    >
      <Richtext
        content={techTitle}
        className={clsx('font-poppins text-4xl font-semibold')}
      />
      <div className='technologycards flex gap-7'>
        {blok.technologyCards.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <Richtext content={techBottom} className={clsx('font-poppins')} />
    </div>
  );
};

export default Technology;
