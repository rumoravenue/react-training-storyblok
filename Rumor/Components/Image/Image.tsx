import { SbBlokData } from '@storyblok/react';
import React, { CSSProperties } from 'react';
import { Asset, marginBottom, marginTop } from '../../../types';
interface sbImagePorps extends SbBlokData {
  image?: Asset;
  marginTop?: number;
  marginBottom?: number;
  negativeMarginBottom?: number;
  imageWidth?:number;
  marginAuto?:boolean;
}

import clsx from 'clsx';

interface ImageProps {
  blok: sbImagePorps;
}

const Image: React.FC<ImageProps> = ({ blok }) => {
  const { image, marginBottom, marginTop, negativeMarginBottom , imageWidth ,marginAuto} = blok;
  const styles: CSSProperties = {};
  const mTop = `mt-${marginTop}`;
  const mBottom = `mb-${marginBottom}`;
  negativeMarginBottom&&(styles.marginBottom=`-${negativeMarginBottom}px`);
  marginAuto&&(styles.marginLeft='auto')
  marginAuto&&(styles.marginLeft='auto')
  

  return (
    <>
      <img
        src={image.filename}
        alt=''
        className={clsx(mTop, mBottom )}
        style={styles}
      />
    </>
  );
};

export default Image;
