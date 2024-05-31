import { storyblokEditable } from '@storyblok/react';
import React from 'react';

interface TechItem {
  image: { filename: string };
  text: string;
  BackGroundColor: { color: string };
}

interface TechCardProps {
  blok: {
    body: TechItem[];
  };
}

const TechCard: React.FC<TechCardProps> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className='flex flex-wrap justify-center gap-2'
    >
      {blok.body.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: item.BackGroundColor.color }}
          className='flex min-h-[18rem] min-w-[13rem] transform flex-col justify-between border-2 border-gray-900 text-start transition-transform hover:scale-105 sm:min-h-[15rem] sm:min-w-[11rem]'
        >
          <div className='p-2'>
            <img
              src={item.image.filename}
              alt={item.text}
              className='w-10 object-contain'
            />
          </div>
          <div className='p-2'>
            <h4 className='text-sm sm:text-base'>{item.text}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechCard;
