import { storyblokEditable } from '@storyblok/react';
import React, { useState } from 'react';

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
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = blok.body.length;

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const pageButtons = Array.from(Array(totalPages).keys()).map((page) => (
    <button
      key={page}
      className={`p-2 ${currentPage === page ? 'text-white' : 'text-gray-400'}`}
      onClick={() => goToPage(page)}
    >
      {page + 1}
    </button>
  ));

  return (
    <div
      className='flex flex-col items-center p-4 text-white'
      {...storyblokEditable(blok)}
    >
      <div key={currentPage} className='mb-2 max-w-lg'>
        <div className='my-2 mb-4 text-center'>
          {blok.body[currentPage].Description}
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          <div className='mr-4 mb-4 h-11 w-11 overflow-hidden rounded-full'>
            <img
              src={blok.body[currentPage].Image.filename}
              alt='img'
              className='h-full w-full rounded-full object-cover'
            />
          </div>
          <div className='flex flex-col'>
            <div className='mb-2 text-center text-base font-semibold'>
              <p>{blok.body[currentPage].CustomerName}</p>
            </div>
            <div className='flex justify-center space-x-2 text-sm'>
              <p>{blok.body[currentPage].Position}</p>
              <p>-</p>
              <p className='text-left'>{blok.body[currentPage].Company_Name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex justify-center'>{pageButtons}</div>
    </div>
  );
};

export default Testimonial;
