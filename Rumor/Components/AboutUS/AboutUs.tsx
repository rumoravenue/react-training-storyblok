import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import { Richtext } from '../../../components/Richtext';
import styles from './AboutUs.module.scss'
import clsx from 'clsx';

interface sbAboutUsProps extends SbBlokData {
  aboutUs?: ISbRichtext;
  hireAnd?: ISbRichtext;
  trustedByUs?: ISbRichtext;
}
interface aboutUsProps {
  blok: sbAboutUsProps;
}

const AboutUs: React.FC<aboutUsProps> = ({ blok }) => {
  return (
    <>
      <div className='aboutus flex flex-col gap-6 justify-center items-center pt-72 pb-60' {...storyblokEditable(blok)}>
        <Richtext content={blok.aboutUs}  className={clsx(styles.poppins , styles.aboutUs)}/>
        <Richtext content={blok.hireAnd} className={clsx(styles.poppins , styles.hireAnd)}/>
        <Richtext content={blok.trustedByUs} className={clsx(styles.poppins , styles.trustedByUs)}/>
      </div>
    </>
  );
};
export default AboutUs;
