import { SbBlokData, storyblokEditable } from '@storyblok/react';
import React, { CSSProperties } from 'react';
import { Assets } from '../../types';
import clsx from 'clsx';

interface SBTeaserProps extends SbBlokData {
  headline?: string;
  description?: string;
  backgroundColor?: SBColor;
  textColor?: SBColor;
  contentAlign?: 'center' | 'right' | 'left';
  backgroundMedia: Assets;
}

interface Iprops {
  blok: SBTeaserProps;
}
interface SBColor {
  color: string;
}

const Teaser: React.FC<Iprops> = ({ blok }) => {
  const {
    headline,
    description,
    backgroundColor,
    backgroundMedia,
    contentAlign,
    textColor,
  } = blok;

  const style: CSSProperties = {};
  backgroundColor && (style.backgroundColor = backgroundColor.color);
  textColor && (style.color = textColor.color);
  return (
    <div {...storyblokEditable(blok)}>
      {backgroundMedia && backgroundMedia.filename ? (
        <img alt={backgroundMedia.alt} src={backgroundMedia.filename} />
      ) : null}

      <div style={style}>
        <h2 className='mb-10 text-2xl'>{headline}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Teaser;
