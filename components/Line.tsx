import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { SBColor, Width } from '../types';

interface ButtonProps {
  color?: SBColor;
  backgroundColor?: SBColor;
  width?: Width;
  type?: string;
  heigth?: string;
}
interface ExtendedButtonProps extends ButtonProps, SbBlokData {}
interface IProps {
  blok: ExtendedButtonProps;
}

const Line: React.FC<IProps> = ({ blok }) => {
  const backgroundColor = blok.backgroundColor?.color || 'black';

  const outerStyle: CSSProperties = {
    backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10px',
  };

  const innerStyle: CSSProperties = {
    width: `${blok.width}`,
    borderBottom: `${blok.height} ${blok.type} ${blok.color.color}`,
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className={clsx('outer-container')}
      style={outerStyle}
    >
      <div className={clsx('inner-line')} style={innerStyle}></div>
    </div>
  );
};

export default Line;
