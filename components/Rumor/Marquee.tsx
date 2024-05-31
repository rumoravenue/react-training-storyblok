import React from 'react';

interface MarqueeProps {
  text?: string;
}
interface IProps {
  blok: MarqueeProps;
}
const Marquee: React.FC<IProps> = ({ blok }) => {
  const text = blok.text || '';
  const words = text.split(' ');
  const firstThreeWords = words.slice(0, 3).join(' ');
  const remainingWords = words.slice(3).join(' ');
  return (
    <div className='flex h-24 items-center overflow-hidden whitespace-nowrap'>
      <div className='animate-marquee flex'>
        <p className='inline text-5xl text-white lg:text-5xl'>
          {firstThreeWords}{' '}
          <span
            style={{
              WebkitTextFillColor: 'black',
              WebkitTextStrokeColor: 'white',
              WebkitTextStrokeWidth: '0.3px',
            }}
          >
            {remainingWords}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Marquee;
