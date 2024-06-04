import React from 'react';
import clsx from 'clsx';
import { storyblokEditable } from '@storyblok/react';
import { SBColor, TextAlign, Width } from '../types';
import { CSSProperties } from 'react'; 

interface ButtonProps {
  textColor?: SBColor;
  borderColor?: SBColor;
  backgroundColor?: SBColor;
  label: string;
  width?: Width;
}

interface IProps {
  blok: ButtonProps;
}

const Button: React.FC<IProps> = ({ blok }) => {
  const backgroundColor = blok.backgroundColor
    ? blok.backgroundColor.color
    : 'transparent';
  const textColor = blok.textColor ? blok.textColor.color : 'white';
  const paddingValue = `calc((100% - ${blok.width}) / 2)`;
  const borderColor = blok.borderColor ? blok.borderColor.color : 'black';

  const style: CSSProperties = {
    backgroundColor,
    color: textColor,
    border: `2px solid ${borderColor}`,
    borderRadius: '50px',
    marginLeft: `${paddingValue}`,
    marginRight: `${paddingValue}`,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
  };
 
  return (
    <div className={clsx('flex flex-row')} style={style}>
      {blok.label}
    </div>
  );
};

export default Button;
