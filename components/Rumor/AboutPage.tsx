import { storyblokEditable, SbBlokData } from '@storyblok/react';
import React from 'react';

interface ImageProps {
  filename: string;
}

interface BlokProps extends SbBlokData {
  Title: string;
  Description: string;
  Description_2: string;
  image: ImageProps;
}

interface AboutPageProps {
  blok: BlokProps;
}

const AboutPage: React.FC<AboutPageProps> = ({ blok }) => {
  const { Title, Description, Description_2, image } = blok;
  return (
    <div className='flex w-full justify-center' {...storyblokEditable(blok)}>
      <div className='flex w-11/12 flex-col items-center'>
        <div className='flex w-full justify-center'>
          <img
            className='relative  top-[-8rem] max-h-[29rem] w-11/12 object-cover sm:top-[-11rem]  md:-top-[14rem] lg:top-[-15rem] xl:top-[-16rem]'
            src={image.filename}
            alt='img'
          />
        </div>
        <div className=' mt-[-7rem] w-11/12 sm:w-8/12 sm:pt-1 md:mt-[-12rem] xl:mt-[-13rem]'>
          <h1 className='text-center'>{Title}</h1>
          <p className='my-5 text-center text-sm font-medium'>{Description}</p>
          <p className='text-center text-sm font-normal'>{Description_2}</p>
        </div>
        <hr className=' mt-8 w-4/12 border-2 border-black' />
      </div>
    </div>
  );
};

export default AboutPage;
