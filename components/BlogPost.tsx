import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import { Richtext } from './Richtext';
import { Author } from '../types';
import { Asset } from '../types';

export interface SbBlogPostProps extends SbBlokData {
  title: string;
  media: Asset;
  content: ISbRichtext;
  author: Author;
  description:string
}

interface IProps {
  blok: SbBlogPostProps;
}

const BlogPost: React.FC<IProps> = ({ blok }) => (
  <main className='mt-4 text-center' {...storyblokEditable(blok)}>
    <img src={blok.media.filename}/>
    <h1>{blok.title}</h1>
    {blok.author && <p>{blok.author.name}</p>} 
    <p>{blok.description}</p>
    <Richtext content={blok.content} />
  </main>
);

export default BlogPost;