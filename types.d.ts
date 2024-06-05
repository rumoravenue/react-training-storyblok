import { ISbRichtext, SbRichTextOptions } from '@storyblok/react';
import { StoryblokRichtext } from 'storyblok-rich-text-react-renderer';

export interface Asset {
  filename?: string;
  alt?: string;
  copyright?: string;
  id?: string;
  name?: string;
  title?: string;
  size?: 'sm|md|lg';
}

export interface SBcolor {
  color?: string;
}
export type TextAlign = 'left' | 'center' | 'right';
export type Author = {
  author: any;
  name: string;
  avatar: Asset;
  bio: StoryblokRichtext;
};

export type ContainerWidth = 'sm|md|lg|xl|xxl';
export type PaddingBottom = 'sm|md|lg|xl|xxl';
export type PaddingTop = 'sm|md|lg|xl|xxl';

export type marginBottom = 'sm|md|lg|xl|xxl';
export type marginTop = 'sm|md|lg|xl|xxl';
export type FontWeight='400|500|600|700|800|900|Bolder'