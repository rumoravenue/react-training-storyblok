// import { ISbRichtext } from "@storyblok/react";
// export interface Asset {
//     filename?: string
//     alt?: string
//     copyright?: string
//     id?: number
//     name?: string
//     title?: string
// }
// export interface SBColor {
//     color: string
// }

// export type TextAlign = 'left' | 'center' | 'right';
// export type Author = {
//     name: string
//     avatar: SBAsset
//     bio: ISbRichtext
    
// }
import { ISbRichtext } from "@storyblok/react";

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

export type TextAlign = 'left' | 'center' | 'right';
// Define the FontSize type
export type FontSize = 'small' | 'large' | 'larger';

// Create an object to map the FontSize to their pixel values and class names
export const fontSizeDetails: { [key in FontSize]: { px: string, className: string } } = {
  small: { px: '30px', className: 'text-sm' },
  large: { px: '50px', className: 'text-lg' },
  larger: { px: '70px', className: 'text-xl' },
};

// Example usage
const smallFontSize: FontSize = 'small';
const largeFontSize: FontSize = 'large';
const largerFontSize: FontSize = 'larger';

const smallFontSizeDetails = fontSizeDetails[smallFontSize];
const largeFontSizeDetails = fontSizeDetails[largeFontSize];
const largerFontSizeDetails = fontSizeDetails[largerFontSize];



export type Author = {
    name: string;
    avatar: Asset;
    bio: ISbRichtext;
}

interface Heading {
    text: string;
    color?: SBColor;
    textAlign?: TextAlign; // Use TextAlign enum here
    padding?: string;
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
