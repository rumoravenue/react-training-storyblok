import { ISbRichtext, SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';
import Card from '../Card/Card';
import { Richtext } from '../../../components/Richtext';
import styles from './WhyUs.module.scss';
import clsx from 'clsx';

interface sbwhyUsProps extends SbBlokData {
  heading?: ISbRichtext;
  cardData?: SbBlokData[];
}
interface whyUsProps {
  blok: sbwhyUsProps;
}

const WhyUs: React.FC<whyUsProps> = ({ blok }) => {
  const { heading, cardData } = blok;
  return (
    <>
      <div className='whyus flex flex-col items-center justify-center  gap-32 pb-36' {...storyblokEditable(blok)}>
        <Richtext
          content={heading}
          className={clsx(styles.poppins, styles.whyus)}
        />
        <div className='whyuscard flex flex-col items-center justify-center gap-11'>
          {blok.cardData.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
