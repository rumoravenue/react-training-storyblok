import React from 'react';
import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import { Richtext } from '../../../components/Richtext';
import clsx from 'clsx';

interface sbCardProps extends SbBlokData {
  cardHeading?: ISbRichtext;
  cardTitle?: ISbRichtext;
  cardDesc?: ISbRichtext;
  borderBottom?: 'yes' | 'no';
}

interface cardProps {
  blok: sbCardProps;
}

const Card: React.FC<cardProps> = ({ blok }) => {
  const { cardHeading, cardTitle, cardDesc, borderBottom } = blok;
  return (
    <div
      className={clsx('card mx-5 flex items-center gap-2.5 pb-2.5', {
        'border-b border-dashed border-[#1D201F]': borderBottom === 'yes',
      })}
      {...storyblokEditable(blok)}
    >
      <div className='font-poppins flex w-2/6 text-2xl'>
        <Richtext content={cardHeading} />
      </div>
      <div className='cardcontent gap-0.75 flex w-4/6 flex-col text-left'>
        <Richtext
          content={cardTitle}
          className='font-poppins text-xl font-bold'
        />
        <Richtext content={cardDesc} className='font-poppins text-xl' />
      </div>
    </div>
  );
};

export default Card;
