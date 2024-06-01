import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import React from 'react';

const Footer = ({ blok }) => {
  return (
    <div
      className='relative flex min-h-screen w-full justify-center'
      {...storyblokEditable(blok)}
      style={{
        backgroundImage: `url(${blok.backgroundMedia.filename})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=' mt-10 flex w-6/12 flex-col gap-6 text-white'>
        <h1>{blok.HeadLine}</h1>
        <p className=''>{blok.Description}</p>
        {blok.body.map((item, index) => (
          <StoryblokComponent blok={item} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
