import { ISbRichtext, StoryblokComponent } from '@storyblok/react';
import React from 'react';
import {
  MARK_STYLED,
  NODE_HEADING,
  NODE_PARAGRAPH,
  render,
} from 'storyblok-rich-text-react-renderer';
import { SBColor, TextAlign, FontSize, FontWeights } from '../types';
import clsx from 'clsx';

const responsiveFontSizeClassNames = {
  xs: 'text-xs  lg:text-xs',
  sm: 'text-xs  lg:text-sm',
  base: 'text-sm  lg:text-base',
  lg: 'text-base  lg:text-lg',
  xl: 'text-base  lg:text-xl',
  '2xl': 'text-xl  lg:text-2xl',
  '3xl': 'text-2xl  lg:text-3xl',
  '4xl': 'text-3xl  lg:text-4xl',
  '5xl': 'text-3xl lg:text-5xl',
};

const fontWeightsClassNames = {
  thin: 'font-thin',
  extraLight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semiBold: 'font-semibold',
  bold: 'font-bold',
  extraBold: 'font-extrabold',
};

const classNames = {
  left: 'lg:text-left',
  center: 'lg:text-center',
  right: 'lg:text-right',
};

const smClassNames = {
  left: 'md:text-left text-left',
  center: 'md:text-center text-center',
  right: 'md:text-right text-right',
};

type RichtextProps = {
  content: ISbRichtext;
  textAlign?: TextAlign;
  textAlignSm?: TextAlign;
  textColor?: SBColor;
  fontSize?: FontSize;
  fontWeights?: FontWeights;
};

type ResolverProps = Record<string, unknown> & { _uid: string };

const defaultBlokResolver = (name: string, props: ResolverProps) => {
  const blok = { ...props, component: name };
  return <StoryblokComponent blok={blok} key={props._uid} />;
};

export const Richtext = ({
  content,
  textAlign,
  textAlignSm,
  textColor,
  fontSize,
  fontWeights,
  ...rest
}: RichtextProps) => {
  const textColorStyle = textColor ? { color: textColor.color } : {};
  const fontWeightClass = fontWeights ? fontWeightsClassNames[fontWeights] : '';
  const fontSizeClass = fontSize ? responsiveFontSizeClassNames[fontSize] : '';

  return (
    <div
      className={clsx(
        classNames[textAlign],
        textAlignSm && smClassNames[textAlignSm],
        fontSizeClass,
        fontWeightClass
      )}
      {...rest}
    >
      {render(content, {
        defaultBlokResolver,
        markResolvers: {
          [MARK_STYLED]: (children, props) => (
            <div className={props.class}>{children}</div>
          ),
        },
        nodeResolvers: {
          [NODE_HEADING]: (children, props) => {
            const Heading = `h${props.level}` as keyof JSX.IntrinsicElements;
            return (
              <Heading
                style={textColorStyle}
                className={clsx(fontSizeClass, fontWeightClass)}
              >
                {children}
              </Heading>
            );
          },
          [NODE_PARAGRAPH]: (children) => (
            <p
              style={textColorStyle}
              className={clsx(fontSizeClass, fontWeightClass)}
            >
              {children}
            </p>
          ),
        },
      })}
    </div>
  );
};
