import { ISbRichtext, SbRichTextOptions } from "@storyblok/react";
import { StoryblokRichtext } from "storyblok-rich-text-react-renderer";

export interface Asset {
  filename?: string;
  alt?: string;
  copyright?: string;
  id?: string;
  name?: string;
  title?: string;
}

export interface SBcolor {
  color?: string;
}
export type TextAlign = 'left' | 'center' | 'right';
export type Author = {
    author: any;
    name:string;
    avatar:Asset;
    bio:StoryblokRichtext;
}
