import { storyblokEditable, SbBlokData } from '@storyblok/react';
import React from 'react';

interface CustomerReviewItemProps extends SbBlokData {
  text_1: string;
  text_2: string;
}

interface CustomerReviewBlokProps extends SbBlokData {
  body: CustomerReviewItemProps[];
}

interface CustomerReviewProps {
  blok: CustomerReviewBlokProps;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({ blok }) => {
  return (
    <div
      className='flex w-full justify-center text-black'
      {...storyblokEditable(blok)}
    >
      {blok.body.map((item, index) => (
        <div key={index} className='flex w-full justify-center sm:w-10/12'>
          <div className='flex flex-col items-center'>
            <h1 className='text-lg font-bold sm:text-3xl'>{item.text_1}</h1>
            <p className='py-1 text-sm sm:text-base'>{item.text_2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
