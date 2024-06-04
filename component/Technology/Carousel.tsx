import React, { useState } from 'react';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { SbBlokData } from '@storyblok/react';

interface CarouselProps {
  blok: {
    slides: SbBlokData[];
  };
}

const Carousel: React.FC<CarouselProps> = ({ blok }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePaginationClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div {...storyblokEditable(blok)} className='carousel-container'>
      <div className='carousel-slide'>
        <StoryblokComponent blok={blok.slides[currentSlide]} />
      </div>
      <div className='carousel-pagination mt-4 flex justify-center space-x-1'>
        {blok.slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-pagination-dot h-8 w-8 rounded-full ${
              index === currentSlide
                ? 'bg-gray-800 text-white'
                : 'bg-gray-400 text-black'
            } flex items-center justify-center`}
            onClick={() => handlePaginationClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
