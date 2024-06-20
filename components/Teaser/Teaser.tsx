import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { Asset, SBColor } from '../../types';
import { CSSProperties } from 'react';
import clsx from 'clsx';
import styles from './Teaser.module.scss';

interface SBTeaserProps extends SbBlokData {
  headline?: string;
  description?: string;
  backroundColor?: SBColor;
  textColor?: SBColor;
  contentAlign?: 'left' | 'right' | 'center';
  backroundMedia?: Asset;
}

interface IProps {
  blok: SBTeaserProps;
}

const Teaser: React.FC<IProps> = ({ blok }) => {
  const {
    headline,
    description,
    backroundColor,
    textColor,
    contentAlign,
    backroundMedia,
  } = blok;

  const style: CSSProperties = {};
  blok.backroundColor && (style.backgroundColor = backroundColor.color);
  textColor && (style.color = textColor.color);

  return (
    <div
      className={clsx(styles.teaser, styles[contentAlign])}
      style={style}
      {...storyblokEditable(blok)}
    >
      {backroundMedia && backroundMedia.filename ? (
        <img className={styles.media} alt={backroundMedia.alt} src={backroundMedia.filename} />
      ) : null}

      <div className={styles.content}>
        <h2 className='mb-10 text-2xl'>{headline}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Teaser;
