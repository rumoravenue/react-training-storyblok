import { ISbRichtext, StoryblokComponent } from '@storyblok/react';
import React from 'react';
import {
  MARK_STYLED,
  NODE_HEADING,
  NODE_PARAGRAPH,
  render,
} from 'storyblok-rich-text-react-renderer';

import { TextAlign } from '../types';
import clsx from 'clsx';

type RichtextProps = {
  content: ISbRichtext;
  textAlign?: TextAlign;
  textAlignSm?: TextAlign;
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

export const Richtext = ({
  content,
  textAlign,
  textAlignSm,
  ...rest
}: RichtextProps) => {
  return (
    <div
      className={clsx(
        classNames[textAlign],
        textAlignSm && smClassNames[textAlignSm]
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
            return <Heading>{children}</Heading>;
          },
          [NODE_PARAGRAPH]: (children) => <p>{children}</p>,
        },
      })}
    </div>
  );
};
