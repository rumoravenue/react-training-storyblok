import { ISbRichtext, SbBlokData } from '@storyblok/react';
import React from 'react';
import { Asset } from '../../../types';
import { Richtext } from '../../../components/Richtext';
interface sbTestimonialProps extends SbBlokData {
  description?: ISbRichtext;
  customerPhoto?: Asset;
  customerName?: ISbRichtext;
  customerPosition?: ISbRichtext;
  customerCompanyName?: ISbRichtext;
  feature?: ISbRichtext;
}
interface testimonailProps {
  blok: sbTestimonialProps;
}

const Testimonial: React.FC<testimonailProps> = ({ blok }) => {
  const {
    description,
    feature,
    customerPhoto,
    customerName,
    customerCompanyName,
    customerPosition,
  } = blok;
  return (
    <>
      <div className='testimonial  flex  flex-col  items-center gap-6'>
        <div className='testimonial-headline'>
          <Richtext content={feature} />
        </div>
        <div className='testimonial-description flex flex-col items-center gap-4'>
          <div className='td-text text-center'>
            <Richtext content={description} />
          </div>
          <div className='customercard flex gap-4'>
            <div className='customer-photo'>
              <img src={customerPhoto.filename} alt='cutomer-photo' className=' w-12 rounded-full h-auto' />
            </div>
            <div className='customer-data flex flex-col'>
              <Richtext content={customerName} />
              <div className='company-data flex gap-3'>
                <Richtext content={customerPosition} />
                <Richtext content={customerCompanyName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
