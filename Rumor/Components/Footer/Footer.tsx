import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import React, { CSSProperties } from 'react';
import { Asset, PaddingBottom, PaddingTop } from '../../../types';
import clsx from 'clsx';

interface sbFooterProps extends SbBlokData {
  body?: SbBlokData[];
  backgroundImage?: Asset;
  paddingTop?: PaddingTop;
  paddingBottom?: PaddingBottom;
}

interface FooterProps {
  blok: sbFooterProps;
}

const paddingTopMap: Record<string, string> = {
  sm: 'pt-8', // 2rem equivalent
  md: 'pt-12', // 3rem equivalent
  lg: 'pt-16', // 4rem equivalent
  xl: 'pt-20', // 5rem equivalent
  xxl: 'pt-40', // 10rem equivalent
};

const paddingBottomMap: Record<string, string> = {
  sm: 'pb-8', // 2rem equivalent
  md: 'pb-12', // 3rem equivalent
  lg: 'pb-16', // 4rem equivalent
  xl: 'pb-20', // 5rem equivalent
  xxl: 'pb-40', // 10rem equivalent
};

const RumorFooter: React.FC<FooterProps> = ({ blok }) => {
  const Styles: CSSProperties = {};
  const { paddingBottom, paddingTop } = blok;

  if (blok.backgroundImage) {
    Styles.backgroundImage = `url(${blok.backgroundImage.filename})`;
    Styles.backgroundSize = 'cover';
    Styles.backgroundPosition = 'center';
    Styles.backgroundRepeat = 'no-repeat';
  }

  return (
    <div
      {...storyblokEditable(blok)}
      style={Styles}
      className={clsx(
        paddingTop && paddingTopMap[paddingTop],
        paddingBottom && paddingBottomMap[paddingBottom]
      )}
    >
      {blok.body &&
        blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};

export default RumorFooter;
