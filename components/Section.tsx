import React from 'react';
import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from '@storyblok/react';
import { SBColor } from '../types';
import { padding } from '../styles/styles';

export interface SectionProps extends SbBlokData {
  content: [];
  backgroundcolour: SBColor;
  color: SBColor;
  paddingTop: string;
  paddingBottom: string;
}

interface IProps {
  blok: SectionProps;
}

const Section = ({ blok }) => {
  const backgroundColor = blok.backgroundcolour
    ? blok.backgroundcolour.color
    : 'transparent';
  const color = blok.color ? blok.color.color : 'transparent';
  const paddingTop = blok.paddingTop ? padding[blok.paddingTop] : '';
  const paddingBottom = blok.paddingBottom ? padding[blok.paddingBottom] : '';

  const sectionStyle = {
    backgroundColor: backgroundColor,
    color: color,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
  };
  return (
    <div {...storyblokEditable(blok)} className='section' style={sectionStyle}>
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Section;
