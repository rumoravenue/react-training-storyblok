import React from 'react';
interface qutions {
  Heading: string;
  Descrition: string;
}
interface FaqProps {
  faqData: {
    Heading: string;

    Description: string;
    faq: qutions[];
    Button: string;
    Title: string;
    Description_2: string;
  };
}
const Faq: React.FC<FaqProps> = ({ faqData }) => {
  return (
    <section className=' w-full bg-gray-300 text-black'>
      <div className='flex flex-col items-center p-12'>
        <h1 className='text-3xl font-semibold'>{faqData?.Heading}</h1>
        <p>{faqData?.Description}</p>
      </div>
      <div className='p-2'>
        {faqData?.faq.map((item, index) => (
          <div key={index}>
            <hr className='border-black' />
            <h1 className='pb-2 text-black'>{item.Heading}</h1>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center pb-10'>
        <h1 className='mt-4 text-lg font-medium'>{faqData?.Title}</h1>

        <p className='my-4'>{faqData?.Description_2}</p>
        <button className='my-4 rounded-3xl border-2 border-black p-2'>
          {faqData?.Button}
        </button>
      </div>
    </section>
  );
};

export default Faq;
