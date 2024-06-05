import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import { Richtext } from '../../../components/Richtext';
import clsx from 'clsx';

interface sbListItemProps extends SbBlokData {
  listTitle?: ISbRichtext;
  listDesc?: ISbRichtext;
  itemNumber?: 'yes' | 'no';
}

interface ListItemProps {
  blok: sbListItemProps;
  index: number;
}

const ListItem: React.FC<ListItemProps> = ({ blok, index }) => {
  const { listDesc, listTitle, itemNumber } = blok;

  return (
    <div
      className={clsx(
        'listitem relative flex w-full items-center justify-center gap-36 border-b border-dashed border-white pb-10 pl-8 sm:flex-col sm:items-center sm:justify-center sm:gap-7  md:flex-col md:items-center md:justify-center md:gap-7'
      )}
      {...storyblokEditable(blok)}
    >
      {itemNumber === 'yes' && (
        <p className='absolute left-1 top-1 font-semibold text-customYellow'>
          {`0${index + 1}`}
        </p>
      )}
      <Richtext
        content={listTitle}
        className='flex w-1/6 items-center text-right'
      />
      <Richtext
        content={listDesc}
        className='w-4/6 text-left sm:text-center md:text-center'
      />
    </div>
  );
};

export default ListItem;
