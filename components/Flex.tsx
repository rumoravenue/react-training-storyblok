import React, { FC } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { SBColor, PaddingSize, Width } from '../types';
import clsx from 'clsx';

interface ColumnProps {
  _uid: string;
  span?: number;
  text?: string;
  textAlign?: string;
}

interface FlexProps {
  blok: {
    column: ColumnProps[];
    backgroundcolour?: SBColor;
    textcolour?: SBColor;
    width?: Width;
  };
}

const Flex: FC<FlexProps> = ({ blok }) => {
  const backgroundColor = blok.backgroundcolour
    ? blok.backgroundcolour.color
    : 'transparent';
  const textColor = blok.textcolour ? blok.textcolour.color : 'white';
  const paddingValue = blok.width ? `calc((100% - ${blok.width}) / 2)` : '0';
  console.log(paddingValue, 'paddingvalue');
  const style = {
    backgroundColor,
    padding: `0 ${paddingValue}`,
    color: textColor,
  };

  return (
    <div
      className={clsx('flex flex-col', 'sm:flex-row', 'p-2')}
      style={style}
      {...storyblokEditable(blok)}
    >
      {blok.column.map((column) => {
        const { _uid, span, text, textAlign } = column;
        const textAlignClass = textAlign ? `text-${textAlign}` : '';

        return (
          <div
            key={_uid}
            className={clsx(
              'w-full p-1',
              'sm:w-full',
              'sm:flex-grow-0',
              textAlignClass
            )}
            style={{ color: textColor }}
          >
            <StoryblokComponent blok={column} />
          </div>
        );
      })}
    </div>
  );
};
export default Flex;
