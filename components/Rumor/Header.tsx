import { storyblokEditable } from '@storyblok/react';
import React from 'react';

const Header = ({ blok }) => {
  const firstThreeElements = blok.body.slice(0, 3);
  const LastThreeElements = blok.body.slice(3, 6);

  return (
    <>
      <div
        className='flex w-full items-center pt-8 sm:flex-row md:flex-row'
        {...storyblokEditable(blok)}
      >
        <div className='hidden flex-1 flex-wrap justify-around md:flex'>
          {firstThreeElements.map((item, index) => (
            <div key={index} className='mx-2 text-white'>
              <p
                style={{
                  color: item.FontColor.color,
                  fontSize: `${item.FontSize}rem`,
                  fontWeight: item.FontWeigh,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className='mx-4 hidden flex-shrink-0 px-4 md:flex md:px-8 lg:px-12 xl:px-16'>
          <img
            src={blok.Image.filename}
            alt=''
            className='lg:w-30 xl:w-50 w-10 sm:w-16 md:w-20'
          />
        </div>
        <div className='hidden flex-1 flex-wrap justify-around md:flex '>
          {LastThreeElements.map((item, index) => (
            <div key={index} className='mx-2 text-white'>
              <p
                style={{
                  color: item.FontColor.color,
                  fontSize: `${item.FontSize}rem`,
                  fontWeight: item.FontWeigh,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
