import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import styles from './Faq.module.scss';
import { SBColor } from '../../types';
import Image from 'next/image';
import downloadIcon from '../../public/Icon (1).png';

export interface FaqProps extends SbBlokData {
  heading: string;
  description: string;
  footer1: string;
  footer2: string;
  button: string;
  backgroundcolour: SBColor;
  color: SBColor;
  question: {
    description: string;
  }[];
}

interface IProps {
  blok: FaqProps;
}

const FaqPage: React.FC<IProps> = ({ blok }) => {
  console.log(blok, 'blok');
  const backgroundColor = blok.backgroundcolour
    ? blok.backgroundcolour.color
    : 'transparent';
  const color = blok.color ? blok.color.color : 'transparent';
  return (
    <div className={styles.customerPage} style={{ backgroundColor, color }}>
      <div className={styles.heading}>{blok.heading}</div>
      <div className={styles.description1}>{blok.description}</div>
      <div className={styles.dottedLine}></div>
      <div>
        {blok.question.map((item, index) => (
            <div>
          <div className={styles.processContainer} key={index}>
            <p className={styles.processItem}>{item.description}</p>
            <span className={styles.downloadIcon}>
              <Image src={downloadIcon} alt='Download icon' />
            </span>
          </div>
           <div className={styles.dottedLine}></div>
           </div>
        ))}
      </div>
      <div className={styles.footer1}>{blok.footer1}</div>
      <div className={styles.footer2}>{blok.footer2}</div>
      <div className={styles.button}>{blok.button}</div>
    </div>
  );
};

export default FaqPage;
