import { storyblokEditable } from '@storyblok/react';
import React from 'react';

const Flex = ({ blok }) => {
  const {
    justifyContent,
    flex,
    textAlign,
    gap,
    fontSize,
    FontWeight,
    fontColor,
  } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className=' flex max-w-[120%] flex-col flex-wrap sm:w-full'
    >
      <ul
        className='flex '
        style={{
          flexDirection: flex,
          justifyContent: justifyContent,
          textAlign: textAlign,
          gap: `${gap}rem`,
          fontSize: `${fontSize}rem`,
          fontWeight: FontWeight,
          color: fontColor?.color,
        }}
      >
        {blok.body.map((item, index) => (
          <li key={index} className='text-center'>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flex;
