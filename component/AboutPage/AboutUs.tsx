import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import styles from './AboutUs.module.scss';
import { Asset } from '../../types';

export interface SbBlogPostProps extends SbBlokData {
  title: string;
  description: string;
  footer:string
  media: Asset;
}

interface IProps {
  blok: SbBlogPostProps;
}

const AboutPage: React.FC<IProps> = ({ blok }) => {

 return (
    <div
      className={`${styles['landing-page']} text-center`}
      {...storyblokEditable(blok)}
    >
         <img  className={styles['image-container']} src={blok.media.filename}/>
      <h1 className={styles['heading']}>
        <span>{blok.title}</span>
        <br />
      </h1>
      <p className={styles['description']}>{blok.description}</p>
      <p className={styles['footer']}>{blok.footer}</p>
      <div className={styles['line']}></div>
    </div>
  );
};

export default AboutPage;
