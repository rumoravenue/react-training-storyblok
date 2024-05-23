import React, { FC } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { SBColor } from '../types';

interface ColumnProps {
  _uid: string;
  span?: number;
 
  text?: string;
}

interface FlexProps {
  blok: {
    column: ColumnProps[];
    backgroundcolour?: SBColor; 
    textcolour?: SBColor;
  };
}

const Flex: FC<FlexProps> = ({ blok }) => {
  const backgroundColor = blok.backgroundcolour ? blok.backgroundcolour.color : 'transparent';

  return (
    <div className='flex flex-row ' style={{ backgroundColor , paddingTop: '26px'}} {...storyblokEditable(blok)}>
      {blok.column.map((column) => {
        const { _uid, span, text } = column;
        const textColor = blok.textcolour ? blok.textcolour.color : 'white';
         
        return (
          <div
            key={_uid}
            className={`w-full p-2 ${span ? `lg:flex-grow-${span}` : ''}`}
            style={{ color: textColor }}
          >
            <div>{text}</div>
            <StoryblokComponent blok={column} />
          </div>
        );
      })}
    </div>
  );
};

export default Flex;
