import { SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';

interface SbBlogPostProps extends SbBlokData {
  title: string;
  body: string;
  author: string;
}

interface IProps {
  blok: SbBlogPostProps;
}

const BlogPost: React.FC<IProps> = ({ blok }) => (
  <main className='mt-4 text-center' {...storyblokEditable(blok)}>
    <h1>{blok.title}</h1>
    <p>{blok.author}</p>
    <p>{blok.body}</p>
  </main>
);

export default BlogPost;
