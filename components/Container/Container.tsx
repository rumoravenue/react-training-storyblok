import React, { CSSProperties } from 'react';
import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { Asset, Heading } from '../../types';
import clsx from 'clsx';
import styles from "./Container.module.scss"
// import HeadingComponent from '../Heading';
import { SBColor, Headings, TextAlign } from '../../types'; // Ensure TextAlign is imported

interface SBTeaserProps extends SbBlokData {
//   title: Heading;
  headline: string;
  description: string;
  backgroundcolour?: { color: string };
  textcolour: SBColor;
  contentAlign: 'left' | 'right' | 'center';
  backgroundMedia?: Asset;
}

interface IProps {
  blok: SBTeaserProps;
}

const Container: React.FC<IProps> = ({ blok }) => {
  const {
    title,
    headline,
    description,
    backgroundcolour,
    textcolour,
    contentAlign,
    backgroundMedia,
  } = blok;

  console.log("Title:", title,backgroundcolour);
  console.log("blok:", blok);
  const style: CSSProperties = {};
  backgroundcolour && (style.backgroundColor = backgroundcolour.color);
  textcolour && (style.color = textcolour.color);

  return (
    <div className={clsx(styles.teaser, styles[contentAlign])} style={style} {...storyblokEditable(blok)}>
      {backgroundMedia && backgroundMedia.filename && (
        <img className={styles.media} alt={backgroundMedia.alt} src={backgroundMedia.filename} />
      )}
      <div className={styles.content}>
        {/* {title.data && title.tag && (
          <HeadingComponent data={title.data} tag={title.tag} />
        )} */}
        <h2 className='mb-10 text-2xl'>{headline}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Container;
