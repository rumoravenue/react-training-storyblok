import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import styles from './CustomerPage.module.scss';
import { SBColor } from '../../types';

export interface CustomerProps extends SbBlokData {
  heading: string;
  description1: string;
  description2: string;
  backgroundcolour: SBColor;
  color: SBColor;
  customer: {
    heading: string;
    description: string;
  }[];
}

interface IProps {
  blok: CustomerProps;
}

const CustomerPage: React.FC<IProps> = ({ blok }) => {
  console.log(blok, 'blok');
  const backgroundColor = blok.backgroundcolour ? blok.backgroundcolour.color : 'transparent';
  const color = blok.color ? blok.color.color: 'transparent';
  return (
    
    <div
      className={styles.customerPage}
      style={{ backgroundColor , color}}
    >
      <div className={styles.heading}  >{blok.heading}</div>
      <div className={styles.description1}>{blok.description1}</div>
      <div className={styles.description2}>{blok.description2}</div>
      <div className={styles.processContainer}>
        {blok.customer.map((item, index) => (
          <div key={index} >
            <div className={styles.processItem}>{item.heading}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
