import { SbBlokData, getStoryblokApi, storyblokEditable } from '@storyblok/react';
import { Asset, SBcolor } from '../../types';
import { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './Teaser.module.scss';

interface SBTeaserProps extends SbBlokData {
  headline?: string;
  description?: string; 
  contentColor?: SBcolor;
  backgroundColor?: SBcolor;
  alignment?: 'left|right|center';
  backgorundMedia?: Asset;
}

interface teaserProps {
  blok: SBTeaserProps;
}

const Teaser: React.FC<teaserProps> = ({ blok }) => {
  const {
    headline,
    description,
    contentColor,
    backgorundMedia,    
    backgroundColor,
    alignment,
  } = blok;
  const style: CSSProperties = {};
  blok.backgroundColor && (style.backgroundColor = backgroundColor.color);
  contentColor && (style.color = contentColor.color);

  async function fetchData() {
    let storyblokApi = getStoryblokApi();
    let {data} = await storyblokApi.getStories({ content_type: 'blogPost' });
    console.log(data);
  }
   fetchData();
 
  return (
    <>
      <div
        className={clsx(styles.teaser, styles[alignment])}
        {...storyblokEditable(blok)}
        style={style}
      >
        {backgorundMedia && backgorundMedia.filename ? (
          <img
            src={backgorundMedia.filename}
            alt={backgorundMedia.alt}
            className={styles.media}
          />
        ) : null}

        <div className={styles.content}>
          <h2 className=' text-2xl'>{headline}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Teaser;
