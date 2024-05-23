// // import { ISbRichtext, StoryblokComponent } from '@storyblok/react';
// // import React from 'react';
// // import {
// //   MARK_STYLED,
// //   NODE_HEADING,
// //   NODE_PARAGRAPH,
// //   render,
// // } from 'storyblok-rich-text-react-renderer';

// // import { SBColor, TextAlign } from '../types';
// // import clsx from 'clsx';

// // type RichtextProps = {
// //   content: ISbRichtext;
// //   textAlign?: TextAlign;
// //   textAlignSm?: TextAlign;
// //   textcolour?:SBColor
// // };

// // type ResolverProps = Record<string, unknown> & { _uid: string };

// // const defaultBlokResolver = (name: string, props: ResolverProps) => {
// //   const blok = { ...props, component: name };
// //   return <StoryblokComponent blok={blok} key={props._uid} />;
// // };

// // const classNames = {
// //   left: 'lg:text-left',
// //   center: 'lg:text-center',
// //   right: 'lg:text-right',
// // };

// // const smClassNames = {
// //   left: 'md:text-left text-left',
// //   center: 'md:text-center text-center',
// //   right: 'md:text-right text-right',
// // };

// // export const Richtext = ({
// //   content,
// //   textAlign,
// //   textAlignSm,
// //   ...rest
// // }: RichtextProps) => {
// //   return (
// //     <div
// //       className={clsx(
// //         classNames[textAlign],
// //         textAlignSm && smClassNames[textAlignSm]
// //       )}
// //       {...rest}
// //     >
// //       {render(content, {
// //         defaultBlokResolver,
// //         markResolvers: {
// //           [MARK_STYLED]: (children, props) => (
// //             <div className={props.class}>{children}</div>
// //           ),
// //         },
// //         nodeResolvers: {
// //           [NODE_HEADING]: (children, props) => {
// //             const Heading = `h${props.level}` as keyof JSX.IntrinsicElements;
// //             return <Heading>{children}</Heading>;
// //           },
// //           [NODE_PARAGRAPH]: (children) => <p>{children}</p>,
// //         },
// //       })}
// //     </div>
// //   );
// // };
// import { ISbRichtext, StoryblokComponent } from '@storyblok/react';
// import React from 'react';
// import {
//   MARK_STYLED,
//   NODE_HEADING,
//   NODE_PARAGRAPH,
//   render,
// } from 'storyblok-rich-text-react-renderer';

// import { SBColor, TextAlign,FontSize } from '../types';
// import clsx from 'clsx';



// type RichtextProps = {
//   content: ISbRichtext;
//   textAlign?: TextAlign;
//   textAlignSm?: TextAlign;
//   textColor?: SBColor;
//   fontSize?: FontSize;
// };

// type ResolverProps = Record<string, unknown> & { _uid: string };

// const defaultBlokResolver = (name: string, props: ResolverProps) => {
//   const blok = { ...props, component: name };
//   return <StoryblokComponent blok={blok} key={props._uid} />;
// };

// const classNames = {
//   left: 'lg:text-left',
//   center: 'lg:text-center',
//   right: 'lg:text-right',
// };

// const smClassNames = {
//   left: 'md:text-left text-left',
//   center: 'md:text-center text-center',
//   right: 'md:text-right text-right',
// };

// const fontSizeClassNames = {
//   small: 'text-sm',
//   large: 'text-lg',
//   larger: 'text-xl',
// };

// export const Richtext = ({
//   content,
//   textAlign,
//   textAlignSm,
//   textColor,
//   fontSize,
//   ...rest
// }: RichtextProps) => {
//   const textColorStyle = textColor ? { color: textColor.color } : {};

//   return (
//     <div
//       className={clsx(
//         classNames[textAlign],
//         textAlignSm && smClassNames[textAlignSm],
//         fontSize && fontSizeClassNames[fontSize]
//       )}
//       {...rest}
//     >
//       {render(content, {
//         defaultBlokResolver,
//         markResolvers: {
//           [MARK_STYLED]: (children, props) => (
//             <div className={props.class}>{children}</div>
//           ),
//         },
//         nodeResolvers: {
//           [NODE_HEADING]: (children, props) => {
//             const Heading = `h${props.level}` as keyof JSX.IntrinsicElements;
//             return <Heading style={textColorStyle}>{children}</Heading>; // Apply textColorStyle to Heading
//           },
//           [NODE_PARAGRAPH]: (children) => <p style={textColorStyle}>{children}</p>, // Apply textColorStyle to paragraphs
//         },
//       })}
//     </div>
//   );
// };













import { ISbRichtext, StoryblokComponent } from '@storyblok/react';
import React from 'react';
import {
  MARK_STYLED,
  NODE_HEADING,
  NODE_PARAGRAPH,
  render,
} from 'storyblok-rich-text-react-renderer';

import { SBColor, TextAlign, FontSize } from '../types';
import clsx from 'clsx';

type RichtextProps = {
  content: ISbRichtext;
  textAlign?: TextAlign;
  textAlignSm?: TextAlign;
  textColor?: SBColor;
  fontSize?: FontSize;
};

type ResolverProps = Record<string, unknown> & { _uid: string };

const defaultBlokResolver = (name: string, props: ResolverProps) => {
  const blok = { ...props, component: name };
  return <StoryblokComponent blok={blok} key={props._uid} />;
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

const fontSizeClassNames = {
  small: 'text-[30px]',  
  large: 'text-[50px]', 
  larger: 'text-[70px]',  
};

export const Richtext = ({
  content,
  textAlign,
  textAlignSm,
  textColor,
  fontSize,
  ...rest
}: RichtextProps) => {
  const textColorStyle = textColor ? { color: textColor.color } : {};

  return (
    <div
      className={clsx(
        classNames[textAlign],
        textAlignSm && smClassNames[textAlignSm],
        fontSize && fontSizeClassNames[fontSize]
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
              <Heading style={textColorStyle} className={clsx(fontSize && fontSizeClassNames[fontSize])}>
                {children}
              </Heading>
            ); // Apply textColorStyle and fontSize class to Heading
          },
          [NODE_PARAGRAPH]: (children) => (
            <p style={textColorStyle} className={clsx(fontSize && fontSizeClassNames[fontSize])}>
              {children}
            </p>
          ), // Apply textColorStyle and fontSize class to paragraphs
        },
      })}
    </div>
  );
};
