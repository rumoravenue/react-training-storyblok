import React from 'react';

interface customerDataProps {
  Heading: string;
  description: string;
}
interface customerProps {
  customerStories: {
    Title: string;
    Headline: string;
    Description: string;
    customerData: customerDataProps[];
  };
}

const CustomerStories: React.FC<customerProps> = ({ customerStories }) => {
  return (
    <section className=' w-full bg-yellow-500 p-8 text-black'>
      <div className=' flex flex-col items-center'>
        <h3 className=' text-lg capitalize'>{customerStories?.Title}</h3>
        <h1 className='p-4 text-4xl font-semibold'>
          {customerStories?.Headline}
        </h1>
        <p>{customerStories?.Description}</p>
      </div>
      <div className='flex justify-around p-4'>
        {customerStories?.customerData.map((item, index) => (
          <div key={index} className='flex flex-col p-4'>
            <h1 className=' text-5xl font-bold'>{item?.Heading}</h1>
            <p className='text-base'>{item?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerStories;
