import React from 'react';

interface HeroSectionProps {
  heroSection: {
    Title: string;
    Description: string;
    Btn_GetStart: string;
    Btn_LearnMore: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroSection }) => {
  return (
    <section className='  flex min-h-[140vh] w-full flex-col items-center   bg-black text-white'>
      <div className='mt-24 flex w-7/12 flex-col items-center text-center'>
        <h1 className='mb-10 text-6xl font-semibold'>{heroSection?.Title}</h1>
        <p className='text-lg text-orange-400'>{heroSection?.Description}</p>
      </div>
      <div className='mt-20 flex  w-6/12 justify-center gap-8'>
        <button className='rounded-full border-2 px-8 py-3'>
          {heroSection?.Btn_GetStart}
        </button>
        <button className='rounded-full border-2 px-8 py-3'>
          {heroSection?.Btn_LearnMore}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
