import React from 'react'

interface MarqueeProps {
  text?: string
}

interface IProps {
  blok: MarqueeProps
}

const Marquee: React.FC<IProps> = ({ blok }) => {
  const text = blok.text || '';
  const words = text.split(' ');
  const firstThreeWords = words.slice(0, 3).join(' ');
  const remainingWords = words.slice(3).join(' ');

  return (
    <div className="overflow-hidden whitespace-nowrap flex items-center h-24">
      <div className="animate-marquee flex">
        <p className="text-5xl lg:text-5xl text-white inline">
          {firstThreeWords}{' '}
          <span
            style={{
              WebkitTextFillColor: 'black',
              WebkitTextStrokeColor: 'white',
              WebkitTextStrokeWidth: '0.3px'
            }}
          >
            {remainingWords}
          </span>
        </p>
      </div>
    </div>
  )
}
export default Marquee
