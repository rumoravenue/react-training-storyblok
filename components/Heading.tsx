import React from 'react';
import { Richtext } from './Richtext';
import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import { SBColor, TextAlign, FontSize, FontWeights, Width } from '../types';

interface TextProps extends SbBlokData {
  content?: ISbRichtext;
  textAlign?: TextAlign;
  colour: SBColor;
  fontSize?: FontSize;
  fontweight?: FontWeights;
  backgroundColour?: SBColor;
  width?: Width;
}

interface IProps {
  blok: TextProps;
}

const Heading: React.FC<IProps> = ({ blok }) => {
  const backgroundColor = blok.backgroundColour
    ? blok.backgroundColour.color
    : '';

  const paddingValue = `calc((100% - ${blok.width}) / 2)`;

  const style = {
    backgroundColor,
    margin: `0 ${paddingValue}`,
  };
  return (
    <div style={style}>
      <Richtext
        {...storyblokEditable(blok)}
        content={blok.content}
        textAlign={blok.textAlign}
        textColor={blok.colour}
        fontSize={blok.fontSize}
        fontWeights={blok.fontweight}
      />
    </div>
  );
};

export default Heading;
