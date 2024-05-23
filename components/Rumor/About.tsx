import React from 'react';

interface columsProps {
  Heading: string;
  Title: string;
  Description: string;
}
interface aboutProps {
  about: {
    Title: string;
    Title2: string;
    Image: {
      filename: string;
    };
    Description: string;
    Description_2: string;
    colums: columsProps[];
  };
}

const About: React.FC<aboutProps> = ({ about }) => {
  return (
    <section className='flex w-full flex-col items-center pt-64 text-black'>
      <div className='flex justify-center'>
        <img
          className='absolute top-[49rem] h-[35rem] w-[82rem] object-cover sm:top-[45rem] sm:h-[27rem] sm:w-[56rem]'
          src={about?.Image.filename}
          alt='image'
        />
      </div>
      <div className='mb-10 flex w-8/12 flex-col items-center'>
        <h1 className='p-10 text-3xl font-medium'>{about?.Title}</h1>
        <p className='p-4 text-lg'>{about?.Description}</p>
        <p className='p-4 text-sm'>{about?.Description_2}</p>
        <hr className='mt-14 mb-14 w-1/6 border-2 border-black' />
      </div>
      <div className='mb-14 text-3xl font-medium'>
        <h1 className=''>{about?.Title2}</h1>
      </div>
      {about?.colums?.map((item, index) => (
        <div key={index} className='w-8/12'>
          <div className='grid grid-cols-[200px_1fr_100px] gap-4'>
            <div className='p-4 text-2xl font-semibold'>{item?.Heading}</div>
            <div className='p-4'>
              <div className='text-lg font-medium'>{item?.Title}</div>
              <div>{item?.Description}</div>
            </div>
          </div>
          <hr className='my-6 border-[1px] border-dotted border-black' />
        </div>
      ))}
    </section>
  );
};

export default About;
