import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import React, { CSSProperties } from 'react';
import { SBcolor } from '../../../types';
import clsx from 'clsx';

interface sbSectionProps extends SbBlokData {
  body?: SbBlokData[];
  paddingTop?: number;
  paddingBottom?: number;
  horizontalPadding?: number; 
  backgroundColor?: SBcolor;
}

interface sectionProps {
  blok: sbSectionProps;
}

const Section: React.FC<sectionProps> = ({ blok }) => {
  const { paddingTop, paddingBottom, horizontalPadding, backgroundColor } =
    blok;
    const style: CSSProperties = {};
  const pTop=`${paddingTop}rem`
  const pBottom=`${paddingBottom}rem`
  paddingTop&&(style.paddingTop=pTop)
  paddingBottom&&(style.paddingBottom=pBottom)
  
  if (backgroundColor && backgroundColor.color) {
    style.backgroundColor = backgroundColor.color;
  }
  if (horizontalPadding) {
    style.paddingLeft = `${horizontalPadding}%`;
    style.paddingRight = `${horizontalPadding}%`;
  }

  return (
    <div
      {...storyblokEditable(blok)}
      className={clsx('section')}
      style={style}
    >
      <div className={clsx('container mx-auto')}>
        {blok.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Section;
