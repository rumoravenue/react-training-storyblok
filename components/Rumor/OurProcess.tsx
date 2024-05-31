import { storyblokEditable } from '@storyblok/react';
import React from 'react';

interface ProcessItem {
  text_1: string;
  text_2: string;
}

interface OurProcessProps {
  blok: {
    Our_Process: ProcessItem[];
    fontSize_text1: number;
    fontSize_text2: number;
    FontWeight_text1: string;
    FontWeight_text2: string;
    FontColor_text1: { color: string };
    FontColor_text2: { color: string };
  };
}

const OurProcess: React.FC<OurProcessProps> = ({ blok }) => {
  const {
    fontSize_text1,
    fontSize_text2,
    FontWeight_text1,
    FontWeight_text2,
    FontColor_text1,
    FontColor_text2,
    Our_Process,
  } = blok;

  return (
    <div {...storyblokEditable(blok)} className='flex flex-col items-center'>
      {Our_Process.map((item, index) => (
        <React.Fragment key={index}>
          <section className='grid w-11/12 grid-cols-1 gap-4 p-2 md:w-9/12 md:grid-cols-12 md:gap-8 md:p-4'>
            <div className='flex items-center gap-2 p-2 text-start md:col-span-3 md:gap-4'>
              <span className='text-orange-400'>
                {index <= 9 ? `0${index + 1}` : index + 1}
              </span>
              <h4
                style={{
                  fontSize: `${fontSize_text1}rem`,
                  fontWeight: FontWeight_text1,
                  color: FontColor_text1.color,
                }}
                className='text-base md:text-lg'
              >
                {item.text_1}
              </h4>
            </div>
            <div className='p-2 text-start md:col-span-9'>
              <p
                style={{
                  fontSize: `${fontSize_text2}rem`,
                  fontWeight: FontWeight_text2,
                  color: FontColor_text2.color,
                }}
                className='text-sm md:text-base'
              >
                {item.text_2}
              </p>
            </div>
          </section>
          <hr className='w-11/12 border-[1px] border-dashed md:w-9/12 ' />
        </React.Fragment>
      ))}
    </div>
  );
};

export default OurProcess;
