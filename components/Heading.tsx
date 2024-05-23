// // import React, { CSSProperties } from 'react';
// // import { SBColor, Heading, Headings, TextAlign } from '../types';
// // // import { SBColor } from '../types';

// // interface HeadingProps {
// //   data: {
// //     text: string;
// //     color?: SBColor;
// //     textAlign?: TextAlign;
// //     padding?: string;
// //     marginTop?: string;
// //   };
// //   tag: keyof Headings;
// // }

// // const HeadingComponent: React.FC<HeadingProps> = ({ data, tag }) => {
// //   const { text, color, textAlign, padding, marginTop } = data;

// //   const style: CSSProperties = {};
// //   if (color) style.color = color.color;
// //   if (padding) style.padding = padding;
// //   if (marginTop) style.marginTop = marginTop;
// //   if (textAlign) style.textAlign = textAlign;

// //   return React.createElement(tag, { style }, text);
// // };

// // export default HeadingComponent;



// import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
// import { SBColor, TextAlign } from '../types';
// import React from 'react';
// import { Richtext } from './Richtext';

// interface TextProps extends SbBlokData {
//   content?: ISbRichtext;
//   textAlign?: TextAlign;
//   colour:SBColor
// }

// interface IProps {
//   blok: TextProps;
// }
//   console.log("hello")
// const Heading: React.FC<IProps> = ({ blok }) => {
//     console.log('Content:', blok.content);
//   console.log('Text Align:', blok.textAlign);
//   console.log('Colour:', blok.colour);
//   return (
    
//     <Richtext
//       {...storyblokEditable(blok)}
//       content={blok.content}
//       textAlign={blok.textAlign}
//       textColor={blok.colour}
      
//     />
//   );
// };

// export default Heading;



















import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import { SBColor, TextAlign, Headings ,FontSize} from '../types';
import React from 'react';
import { Richtext } from './Richtext';

interface TextProps extends SbBlokData {
  content?: ISbRichtext;
  textAlign?: TextAlign;
  colour: SBColor;
  fontSize?:FontSize
//   headingTag?: keyof JSX.IntrinsicElements; 
}

interface IProps {
  blok: TextProps;
}

const Heading: React.FC<IProps> = ({ blok }) => {
  
  

  return (
    <Richtext
      {...storyblokEditable(blok)}
      content={blok.content}
      textAlign={blok.textAlign}
      textColor={blok.colour}
      fontSize={blok.fontSize}
    />
  );
};

export default Heading;

