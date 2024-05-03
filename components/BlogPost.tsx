import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import { Richtext } from './Richtext';
import { Assets, Auther } from '../types';

interface SbBlogPostProps extends SbBlokData {
  media: Assets;
  title: string;
  content: ISbRichtext;
  author: Auther;
}

interface IProps {
  blok: SbBlogPostProps;
}

const BlogPost: React.FC<IProps> = ({ blok }) => (
  <main className='mt-4 text-center' {...storyblokEditable(blok)}>
    <img src={blok.media.filename} />
    <h1>{blok.title}</h1>
    <p>{blok.author.name}</p>
    <Richtext content={blok.content} />
  </main>
);

export default BlogPost;
