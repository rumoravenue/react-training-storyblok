import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import styles from './CustomerStories.module.scss';
import { CSSProperties } from 'react';
import clsx from 'clsx';

interface sbCustomerStoriesProps extends SbBlokData {
  body?: SbBlokData[];
}

interface customerStoriesProps {
  blok: sbCustomerStoriesProps;
}
const CustomerStories: React.FC<customerStoriesProps> = ({ blok }) => {
  return (
    <div className={clsx('customer-services')} {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok, index) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          index={index}
        />
      ))}
    </div>
  );
};

export default CustomerStories;
