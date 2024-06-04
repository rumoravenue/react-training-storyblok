import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import styles from './CustomerPage.module.scss';
import { SBColor } from '../../types';

export interface CustomerProps extends SbBlokData {
  heading: string;
  description: string;
}

interface IProps {
  blok: CustomerProps;
}

const CustomerItem: React.FC<IProps> = ({ blok }) => {
  return (
    <div className={styles.customerPage}>
      <div className={styles.processItem}>{blok.heading}</div>
      <p>{blok.description}</p>
    </div>
  );
};

export default CustomerItem;
