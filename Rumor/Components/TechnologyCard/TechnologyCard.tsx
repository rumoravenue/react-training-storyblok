import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React, { CSSProperties } from 'react';
import { Asset, SBcolor } from '../../../types';
import { Richtext } from '../../../components/Richtext';
import clsx from 'clsx';

interface sbTechnologyCardProps extends SbBlokData {
  cardImage?: Asset;
  cardText?: ISbRichtext;
  backgroundColor?: SBcolor;
}

interface technologyCardProps {
  blok: sbTechnologyCardProps;
}

const TechnologyCard: React.FC<technologyCardProps> = ({ blok }) => {
  const { cardImage, cardText, backgroundColor } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      style={{ backgroundColor: backgroundColor?.color }}
      className='flex w-52 flex-col justify-around gap-32 rounded-xl p-4'
    >
      <img src={cardImage?.filename} alt='' className='w-1/4' />
      <Richtext content={cardText} className='font-poppins' />
    </div>
  );
};

export default TechnologyCard;
