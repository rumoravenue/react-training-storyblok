import { storyblokEditable, SbBlokData } from '@storyblok/react';
import React, { CSSProperties } from 'react';
import { Asset} from '../../types';
import styles from './Teaser.module.scss'
import clsx from 'clsx';
import { SBColor } from '../../types';


interface SBTeaserProps extends SbBlokData {
  headline: string;
  description: string;
    backgroundcolur?: { color: string };
  textcolour: SBColor;
  contentAlign: 'left' | 'right' | 'center';
  backgroundMedia?: Asset;
}

interface IProps {
  blok: SBTeaserProps;
}
const Teaser: React.FC<IProps> = ({ blok }) => {
  const {
    headline,
    description,
    backgroundcolur, // Corrected property name
    textcolour,
    contentAlign,
    backgroundMedia,
  } = blok;

  const style: CSSProperties = {};
  backgroundcolur && (style.backgroundColor = backgroundcolur.color);
  textcolour && (style.color=textcolour.color);
//   console.log("hello",textcolour,backgroundcolur)
//   console.log("blok object:", blok);
// console.log("backgroundcolour:", backgroundcolur);

  return (
    <div className={clsx(styles.teaser, styles[contentAlign])} style={style} {...storyblokEditable(blok)}>
      {backgroundMedia && backgroundMedia.filename && (
        <img className={styles.media} alt={backgroundMedia.alt} src={backgroundMedia.filename} />
      )}
      <div className={styles.content}>
        <h2 className='mb-10 text-2xl'>{headline}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
  
};

export default Teaser;

