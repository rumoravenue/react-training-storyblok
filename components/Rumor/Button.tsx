import React from 'react';
import { storyblokEditable, SbBlokData } from '@storyblok/react';

interface ButtonItemProps extends SbBlokData {
  text: string;
  TextColor?: {
    color: string;
  };
  Border?: number;
  borderColor?: {
    color: string;
  };
  borderRadius?: number;
  FontSize?: number;
  FontWeight?: string;
  Padding_x?: number;
  Padding_y?: number;
}

interface ButtonBlokProps extends SbBlokData {
  body: ButtonItemProps[];
}

interface ButtonProps {
  blok: ButtonBlokProps;
}

const Button: React.FC<ButtonProps> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className='flex w-full flex-wrap justify-center gap-4 md:gap-8'
    >
      {blok.body.map((item, index) => (
        <div key={index} className='flex justify-center'>
          <button
            style={{
              color: item?.TextColor?.color,
              border: `${item?.Border || 0}px solid ${item?.borderColor?.color || 'transparent'}`,
              borderRadius: `${item?.borderRadius || 0}rem`,
              fontSize: `${item?.FontSize || 1}rem`,
              fontWeight: item?.FontWeight,
              padding: `${item?.Padding_y || 0}rem ${item?.Padding_x || 0}rem`,
            }}
            className='transition-colors duration-300 hover:bg-blue-400 '
          >
            {item.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Button;
