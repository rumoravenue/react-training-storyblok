// import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
// import React from 'react';
// import styles from './Why.module.scss';

// export interface SbPostProps extends SbBlokData {
//   title: string;
//   heading: string;
//   section: string;
// }

// interface IProps {
//   blok: SbPostProps;
// }

// const WhyUsItem: React.FC<IProps> = ({ blok }) => (
//   <div className={styles['why-us-item']} {...storyblokEditable(blok)}>
//     <div className={styles['why-us-item-title']}>
//       <h1>{blok.title}</h1>
//     </div>
//     <div className={styles['why-us-item-content']}>
//       <h2>{blok.heading}</h2>
//       <p>{blok.section}</p>
//     </div>
//   </div>
// );

// export default WhyUsItem;
import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import styles from './Why.module.scss';

export interface SbPostProps extends SbBlokData {
  title: string;
  heading: string;
  section: string;
}

interface IProps {
  blok: SbPostProps;
}

const WhyUsItem: React.FC<IProps> = ({ blok }) => (
  <div className={styles['why-us-item']} {...storyblokEditable(blok)}>
    <div className={styles['why-us-item-title']}>
      <h1>{blok.title}</h1>
    </div>
    <div className={styles['why-us-item-content']}>
      <h2>{blok.heading}</h2>
      <p>{blok.section}</p>
    </div>
  </div>
);

export default WhyUsItem;

