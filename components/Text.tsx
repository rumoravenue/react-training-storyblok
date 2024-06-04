import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import { FontSize, FontWeights, SBColor, TextAlign, Width } from '../types';
import React from 'react';
import { Richtext } from './Richtext';
import { PaddingSize } from '../types';
import clsx from 'clsx';

interface TextProps extends SbBlokData {
  content?: ISbRichtext;
  textAlign?: TextAlign;
  textAlignSm?: TextAlign;
  colour?: SBColor;
  fontSize?: FontSize;
  fontweight: FontWeights;
  width?: Width;
  backgroundcolour?: SBColor;
}

interface IProps {
  blok: TextProps;
}

const Text: React.FC<IProps> = ({ blok }) => {
  const backgroundColor = blok.backgroundcolour
    ? blok.backgroundcolour.color
    : 'transparent';
  const textColor = blok.colour ? blok.colour.color : 'white';
  const paddingValue = `calc((100% - ${blok.width}) / 2)`;
  const style = {
    backgroundColor,
    padding: `1% ${paddingValue}`,
    color: textColor,
  };
  const textAlignClass = blok.textAlign ? `text-${blok.textAlign}` : '';
  const textAlignSmClass = blok.textAlignSm
    ? `sm:text-${blok.textAlignSm}`
    : '';

  return (
    <div
      className={clsx('flex flex-row', textAlignClass, textAlignSmClass)}
      style={style}
      {...storyblokEditable(blok)}
    >
      <Richtext
        {...storyblokEditable(blok)}
        content={blok.content}
        textAlign={blok.textAlign}
        textAlignSm={blok.textAlignSm}
        fontSize={blok.fontSize}
        fontWeights={blok.fontweight}
      />
    </div>
  );
};
export default Text;
