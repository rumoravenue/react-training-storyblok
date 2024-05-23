import React from 'react';

interface cardProps {
  Image: {
    filename: string;
  };
  Artical: string;
  Artical_Title: string;
  Button_1: string;
  Button_2: string;
}

interface caseStudyProps {
  caseStudy: {
    Title: string;
    Heading: string;
    Description: string;
    Button: string;
    Card: cardProps[];
  };
}

const CaseStudies: React.FC<caseStudyProps> = ({ caseStudy }) => {
  return (
    <section className='flex flex-col items-center py-8 text-black'>
      <div className='mb-8 text-center'>
        <h3 className='mb-2 text-base capitalize'>{caseStudy?.Title}</h3>
        <h1 className='mb-4 text-3xl font-semibold'>{caseStudy?.Heading}</h1>
        <p className='max-w-2xl'>{caseStudy?.Description}</p>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        {caseStudy?.Card.map((item, index) => (
          <div
            key={index}
            className='w-80 overflow-hidden rounded-lg border-2 border-gray-300 shadow-lg'
          >
            <img
              src={item?.Image.filename}
              alt='image'
              className='h-48 w-full object-cover'
            />
            <div className='p-4'>
              <div className='mb-4 flex justify-between'>
                <button className='rounded-full border-2 border-black p-2'>
                  {item?.Button_1}
                </button>
                <button className='rounded-full  border-2 border-black p-2'>
                  {item?.Button_2}
                </button>
              </div>
              <h1 className='text-lg font-semibold'>
                <span className='text-red-500'>{item?.Artical}</span>
                {item?.Artical_Title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <button className='border-blackpx-6 rounded-full border-2 p-2 text-black'>
          {caseStudy?.Button}
        </button>
      </div>
    </section>
  );
};

export default CaseStudies;
