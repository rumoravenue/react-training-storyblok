import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import React from 'react';
import clsx from 'clsx';

interface sbFlexProps extends SbBlokData {
  flexContent?: SbBlokData[];
  flexDirection?: 'row' | 'column';
  flexDirectionSm?: 'row' | 'column';
  flexDirectionMd?: 'row' | 'column';
  justifyContent?:
    | 'jstart'
    | 'jend'
    | 'jcenter'
    | 'jspace-between'
    | 'jspace-evenly'
    | 'jspace-around';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  gap?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  flexWrapSm?: 'wrap' | 'nowrap' | 'wrap-reverse';
  flexWrapMd?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

interface flexProps {
  blok: sbFlexProps;
}

const justifyContentMap: Record<string, string> = {
  jstart: 'justify-start',
  jend: 'justify-end',
  jcenter: 'justify-center',
  'jspace-between': 'justify-between',
  'jspace-evenly': 'justify-evenly',
  'jspace-around': 'justify-around',
};

const alignItemsMap: Record<string, string> = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  stretch: 'items-stretch',
};

const gapMap: Record<string, string> = {
  sm: 'gap-4',
  md: 'gap-8',
  lg: 'gap-12',
  xl: 'gap-16',
  xxl: 'gap-28',
};

const flexDirectionMap: Record<string, string> = {
  row: 'flex-row',
  column: 'flex-col',
};

const flexWrapMap: Record<string, string> = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

const Flex: React.FC<flexProps> = ({ blok }) => {
  const {
    flexContent,
    flexDirection = 'row',
    flexDirectionSm = 'row',
    flexDirectionMd = 'row',
    justifyContent = 'jcenter',
    alignItems = 'center',
    gap = 'md',
    flexWrap = 'nowrap',
    flexWrapSm = 'nowrap',
    flexWrapMd = 'nowrap',
  } = blok;

  return (
    <div
      className={clsx(
        'flex',
        justifyContentMap[justifyContent],
        alignItemsMap[alignItems],
        gapMap[gap],
        flexDirectionMap[flexDirection],
        flexWrapMap[flexWrap],
        `${flexWrapMap[flexWrapSm]} sm:${flexWrapMap[flexWrapSm]}`,
        `${flexWrapMap[flexWrapMd]} md:${flexWrapMap[flexWrapMd]}`,
        `${flexDirectionMap[flexDirectionSm]} sm:${flexDirectionMap[flexDirectionSm]}`,
        `${flexDirectionMap[flexDirectionMd]} md:${flexDirectionMap[flexDirectionMd]}`
      )}
      {...storyblokEditable(blok)}
    >
      {flexContent?.map((nestedBlok, index) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          index={index}
        />
      ))}
    </div>
  );
};

export default Flex;
