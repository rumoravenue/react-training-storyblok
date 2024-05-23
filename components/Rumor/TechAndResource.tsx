import React from 'react';

interface Card {
  logo: {
    Image: {
      filename: string;
    };
  };
  Title: string;
}

interface Column {
  Heading: string;
  description: string;
}

interface TechAndResourceProps {
  TechAndResource: {
    Title1: string;
    Cards: Card[];
    colums: Column[];
    Description1: string;
    Title2: string;
    Description2: string;
  };
}

const TechAndResource: React.FC<TechAndResourceProps> = ({
  TechAndResource,
}) => {
  return (
    <section className=' flex h-auto w-full flex-col items-center bg-black p-4 text-white'>
      <h1 className='mt-24 mb-16 text-3xl text-orange-400'>
        {TechAndResource?.Title1}
      </h1>
      <div className='flex w-10/12 flex-wrap justify-center'>
        {TechAndResource?.Cards.map((item, index) => (
          <div
            key={index}
            className='m-2 flex h-80 w-72 flex-col justify-between rounded-md border-2 border-gray-400 p-4 '
          >
            <img src={item?.logo?.Image?.filename} alt='image' />
            <h1 className='mt-4 text-xl '>{item?.Title}</h1>
          </div>
        ))}
        <div className='my-8 w-8/12 '>
          <p>{TechAndResource?.Description2}</p>
        </div>
      </div>
      <div className='flex w-7/12 flex-col items-center p-4'>
        <h1 className='p-6 text-3xl font-medium  text-orange-400'>
          {TechAndResource?.Title2}
        </h1>
        <p className='my-6'>{TechAndResource?.Description2}</p>
      </div>
      <div className='flex flex-col items-center '>
        {TechAndResource?.colums.map((item, index) => (
          // <div className='flex gap-10 p-6'>
          //   <span>{index + 1}</span>
          //   <h1>{item?.Heading}</h1>
          //   <p>{item?.description}</p>
          // </div>
          <>
            <div className='grid w-8/12 grid-cols-[200px_minmax(20rem,_1fr)_100px] gap-4'>
              <div className='flex'>
                <span className='mr-8 text-orange-400'>{index + 1}</span>
                <h1 className='text-2xl font-medium'>{item?.Heading}</h1>
              </div>
              <div>
                <div>{item?.description}</div>
              </div>
            </div>

            <hr className='my-6 w-8/12 border-[1px] border-dotted border-black' />
          </>
        ))}
      </div>
      <div className='flex text-5xl'>
        <h1>world class telent</h1>
        <span>hyper localized</span>
      </div>
    </section>
  );
};

export default TechAndResource;
