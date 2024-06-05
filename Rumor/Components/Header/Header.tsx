import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import styles from './Header.module.scss';
import { Asset } from '../../../types';

interface sbHeaderProps extends SbBlokData {
  logo?: Asset;
  leftLinks?: SbBlokData[];
  rightLinks?: SbBlokData[];
}

interface headerProps {
  blok: sbHeaderProps;
}

const Header: React.FC<headerProps> = ({ blok }) => {
  return (
    <div
      className='header flex items-center   justify-center gap-40 lg:gap-20 border-b-2 border-white bg-black py-8 text-white sm:hidden md:hidden'
      {...storyblokEditable(blok)}
    >
      <div className='leftLink flex gap-7 lg:gap-5 '>
        {blok.leftLinks.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <div className='logo'>
        <img src={blok.logo.filename} alt='photo' />
      </div>
      <div className='rightLink flex gap-7 lg:gap-5'>
        {blok.rightLinks.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Header;
