import { FC } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

type FooterProps = {
  blok: {
    _uid: string;
    section: [];
    backgroundImage?: {
      filename: string;
    };
  };
};
const Footer: FC<FooterProps> = ({ blok }) => {
  console.log(blok);
  return (
    <div
      className='relative flex h-[1000px] w-full justify-center'
      {...storyblokEditable(blok)}
      style={{
        backgroundImage: `url(${blok.backgroundImage.filename})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=' mt-10 flex w-8/12 flex-col gap-6 text-white'>
        {blok.section.map((item, index) => (
          <StoryblokComponent blok={item} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
