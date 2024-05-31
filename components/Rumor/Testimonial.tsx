import { storyblokEditable } from '@storyblok/react';
import React from 'react';

interface TestimonialItem {
  Description: string;
  Image: { filename: string };
  CustomerName: string;
  Position: string;
  Company_Name: string;
}

interface TestimonialProps {
  blok: {
    body: TestimonialItem[];
  };
}

const Testimonial: React.FC<TestimonialProps> = ({ blok }) => {
  return (
    <div
      className='flex flex-col items-center p-4 text-white'
      {...storyblokEditable(blok)}
    >
      {blok.body.map((item, index) => (
        <div key={index} className='mb-2 max-w-lg'>
          <div className='my-2 mb-4 text-center'>{item.Description}</div>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='mr-4 mb-4 h-11 w-11 overflow-hidden rounded-full'>
              <img
                src={item.Image.filename}
                alt='img'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <div className='flex flex-col'>
              <div className='mb-2 text-center text-base font-semibold'>
                <p>{item.CustomerName}</p>
              </div>
              <div className='flex justify-center space-x-2 text-sm'>
                <p>{item.Position}</p>
                <p>-</p>
                <p>{item.Company_Name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
