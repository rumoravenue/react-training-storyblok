import React from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

interface AboutlistProps extends SbBlokData {
  Heading: string;
  Title: string;
  Description: string;
}

interface IProps extends SbBlokData {
  blok: {
    body: AboutlistProps[];
    TextColor: {
      color: string;
    };
  };
}

const AboutList: React.FC<IProps> = ({ blok }) => {
  const {
    body: list,
    TextColor: { color: textColor },
  } = blok;

  return (
    <div
      style={{ color: textColor }}
      className='flex w-full flex-col items-center'
      {...storyblokEditable(blok)}
    >
      {list.map((item, index) => (
        <React.Fragment key={index}>
          <section className='grid w-11/12 grid-cols-12 gap-4 p-2 md:w-9/12 md:gap-8 md:p-4'>
            <div className='col-span-12 p-2 text-start md:col-span-3'>
              <h4 className='text-lg font-medium md:text-xl'>{item.Heading}</h4>
            </div>
            <div className='col-span-12 p-2 text-start md:col-span-9'>
              <h4 className='text-lg font-semibold md:text-xl'>{item.Title}</h4>
              <p className='text-sm font-normal md:text-base'>
                {item.Description}
              </p>
            </div>
          </section>
          {index < list.length - 1 && (
            <hr
              style={{ borderBlockColor: textColor }}
              className='w-11/12 border-[1px] border-dotted md:w-9/12'
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AboutList;
