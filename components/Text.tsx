import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import { TextAlign } from '../types';
import React from 'react';
import { Richtext } from './Richtext';

interface TextProps extends SbBlokData {
  content?: ISbRichtext;
  textAlign?: TextAlign;
  textAlignSm?: TextAlign;
}

interface IProps {
  blok: TextProps;
}

const Text: React.FC<IProps> = ({ blok }) => {
  return (
    <Richtext
      {...storyblokEditable(blok)}
      content={blok.content}
      textAlign={blok.textAlign}
      textAlignSm={blok.textAlignSm}
    />
  );
};

export default Text;