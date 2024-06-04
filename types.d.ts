// // import { ISbRichtext } from "@storyblok/react";
// // export interface Asset {
// //     filename?: string
// //     alt?: string
// //     copyright?: string
// //     id?: number
// //     name?: string
// //     title?: string
// // }
// // export interface SBColor {
// //     color: string
// // }

// // export type TextAlign = 'left' | 'center' | 'right';
// // export type Author = {
// //     name: string
// //     avatar: SBAsset
// //     bio: ISbRichtext

// // }

// // // Create an object to map the FontSize to their pixel values and class names
// // export const fontSizeDetails: { [key in FontSize]: { px: string, className: string } } = {
// //   small: { px: '30px', className: 'text-sm' },
// //   large: { px: '50px', className: 'text-lg' },
// //   larger: { px: '70px', className: 'text-xl' },
// // };

// // // Example usage
// // const smallFontSize: FontSize = 'small';
// // const largeFontSize: FontSize = 'large';
// // const largerFontSize: FontSize = 'larger';

// // const smallFontSizeDetails = fontSizeDetails[smallFontSize];
// // const largeFontSizeDetails = fontSizeDetails[largeFontSize];
// // const largerFontSizeDetails = fontSizeDetails[largerFontSize];

// import { ISbRichtext } from '@storyblok/react';

// export interface Asset {
//   filename?: string;
//   alt?: string;
//   copyright?: string;
//   id?: number;
//   name?: string;
//   title?: string;
// }

// export interface SBColor {
//   color: string;
// }

// export type TextAlign = 'left' | 'center' | 'right';
// export type FontWeights =
//   | 'thin'
//   | 'extraLight'
//   | 'light'
//   | 'normal'
//   | 'medium'
//   | 'semiBold'
//   | 'bold'
//   | 'extraBold';

// export type FontSize =
//   | 'xs'
//   | 'sm'
//   | 'base'
//   | 'lg'
//   | 'xl'
//   | '2xl'
//   | '3xl'
//   | '4xl'
//   | '5xl';

// export type Author = {
//   name: string;
//   avatar: Asset;
//   bio: ISbRichtext;
// };
// interface Heading {
//   text: string;
//   color?: SBColor;
//   textAlign?: TextAlign;
//   padding?: string;
//   marginTop?: string;
// }
// export interface Headings {
//   h1: Heading;
//   h2: Heading;
//   h3: Heading;
//   h4: Heading;
//   h5: Heading;
//   h6: Heading;
// }
import { ISbRichtext } from '@storyblok/react';

export interface Asset {
  filename?: string;
  alt?: string;
  copyright?: string;
  id?: number;
  name?: string;
  title?: string;
}

export interface SBColor {
  color: string;
}
// Example definition for padding sizes





export type TextAlign = 'left' | 'center' | 'right';
export type Width = {
  10: '10rem',
  15: '15rem',
  20: '20rem',
  30: '30rem',
  40: '40rem',
  45: '45rem',
  50: '50rem',
  60: '60rem',
  70: '70rem',
  75: '75rem',
  80: '80rem',
  90: '90rem',
  100: '100rem'
}

export type FontWeights =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold';

export type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export type PaddingSize =
  | 'p0'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5'
  | 'p6'
  | 'p7'
  | 'p8'
  | 'p9'
  | 'p10'
  | 'p11'
  | 'p12'
  | 'p14'
  | 'p16'
  | 'p20'
  | 'p24'
  | 'p28'
  | 'p32'
  | 'p36'
  | 'p40'
  | 'p44'
  | 'p48'
  | 'p52'
  | 'p56'
  | 'p60'
  | 'p64'
  | 'p72'
  | 'p80'
  | 'p96';

export type Author = {
  name: string;
  avatar: Asset;
  bio: ISbRichtext;
};

interface Heading {
  text: string;
  color?: SBColor;
  textAlign?: TextAlign;
  padding?: PaddingSize;
  marginTop?: string;
}

export interface Headings {
  h1: Heading;
  h2: Heading;
  h3: Heading;
  h4: Heading;
  h5: Heading;
  h6: Heading;
}
