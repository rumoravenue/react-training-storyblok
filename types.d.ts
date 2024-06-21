import { ISbRichtext } from "@storyblok/react";

export interface Asset {
  filename?: string;
  alt?: string;
  copyright?: string;
  id?: number;
  name?: string;
  title?: string;
}

export interface SBColor{
  color:string;
}

export type TextAlign = 'left' | 'center' | 'right';

export type SbAsset = {
  id: number;
  alt?: string;
  name?: string;
  focus?: string;
  title?: string;
  source?: string; filename?: string;
  copyright?: string;
  meta_data?: {
  [key: string]: string;
  };
  is_private: boolean;
  is_external_url: boolean;
  };

export type Author = {
  name: string;
  avatar: SbAsset;
  bio: ISbRichtext;
}