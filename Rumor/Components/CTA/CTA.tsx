import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React, { CSSProperties } from 'react';
import { Richtext } from '../../../components/Richtext';
import clsx from 'clsx';
import styles from './CTA.module.scss';
import { SBcolor } from '../../../types';
import { relative } from 'path';

interface sbCTAProps extends SbBlokData {
  text?: ISbRichtext;
  height?: number;
  width?: number;
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  backgroundColor?: SBcolor;
  borderWidth?: number;
  borderColor?: SBcolor;
  multiColorBorder?: boolean;
  buttonPosition?: 'left' | 'right' | 'center';
}

interface CTAProps {
  blok: sbCTAProps;
}

const CTA: React.FC<CTAProps> = ({ blok }) => {
  const {
    text,
    height,
    width,
    borderRadius,
    backgroundColor,
    borderWidth,
    borderColor,
    multiColorBorder,
    buttonPosition,
  } = blok;

  const ctaheight = height ? `${height / 4}rem` : `auto`;
  const ctawidth = width ? `${width / 4}rem` : `auto`;
  const borderwidth = borderWidth ? `${borderWidth}px` : `0px`;
  const roundedClass = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    xxl: 'rounded-2xl',
    full: 'rounded-full',
  }[borderRadius || ''];

  let bgcolor = backgroundColor ? backgroundColor.color : 'transparent';
  let bordercolor: string;

  const styles: CSSProperties = {};
  if (buttonPosition === 'left') {
    styles.position = 'relative';
    styles.left = 0;
  }
  if (buttonPosition === 'right') {
    styles.position = 'relative';
    styles.right = 0;
  }
  if (buttonPosition === 'center') {
    styles.position = 'relative';
    styles.left = '50%';
    styles.transform = 'translateX(-50%)';
  }

  if (multiColorBorder) {
    styles.border = '1px solid transparent';
    styles.backgroundImage =
      'linear-gradient(#000, #000), linear-gradient(135.39deg, #ef2d56 8.67%, #ffb800 37.82%, #affc41 63.65%, #4bc6b9 90.65%)';
    styles.backgroundOrigin = 'border-box';
    styles.backgroundClip = 'padding-box, border-box';
  } else {
    bordercolor = borderColor ? borderColor.color : 'transparent';
  }

  return (
    <div
      className={clsx(roundedClass)}
      style={{
        height: ctaheight,
        width: ctawidth,
        backgroundColor: bgcolor,
        borderWidth: borderwidth,
        borderColor: bordercolor,
        ...styles,
      }}
      {...storyblokEditable(blok)}
    >
      <Richtext
        content={text}
        className=' flex h-full w-full items-center justify-center text-center'
      />
    </div>
  );
};

export default CTA;
