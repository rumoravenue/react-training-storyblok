import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import { Richtext } from './Richtext';
import { Asset, Author } from '../types';

interface SbBlogPostProps extends SbBlokData {
  title: string;
  content: ISbRichtext;
  author: Author;
  media: Asset;
}

interface IProps {
  blok: SbBlogPostProps;
}

const BlogPost: React.FC<IProps> = ({ blok }) => (
  <main className='mt-4 text-center' {...storyblokEditable(blok)}>
    <h1>{blok.title}</h1>
    <img
      src={blok.media.filename}   
      className='m-auto mt-3'      
    />
    <p>{blok.author.name}</p>
    <Richtext content={blok.content} />

  </main>
);

export default BlogPost;
