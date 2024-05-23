import React from 'react';

interface testimonialProps {
  testimonial: {
    Title: string;
    Heading: string;
    Description: string;
    CompanyName: string;
    CustomerName: string;
    Position: string;
    Image: {
      filename: string;
    };
  };
}

const Testimonial: React.FC<testimonialProps> = ({ testimonial }) => {
  return (
    <section className='bg-black p-8 text-white'>
      <div className='mb-8 text-center'>
        <h3 className='mb-2 text-base capitalize'>{testimonial?.Title}</h3>
        <h1 className='mb-4 text-3xl font-semibold'>{testimonial?.Heading}</h1>
        <p className='mx-auto max-w-2xl'>{testimonial?.Description}</p>
      </div>
      <div className='flex items-center justify-center'>
        <div className='h-16 w-16 overflow-hidden rounded-full border-2 border-gray-300'>
          <img
            src={testimonial?.Image.filename}
            alt='Customer'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='ml-4 text-center'>
          <p className='text-lg font-semibold'>{testimonial?.CustomerName}</p>
          <div className='flex  gap-1 text-sm text-gray-400'>
            <p>{testimonial?.Position}</p>
            <p>{testimonial?.CompanyName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
