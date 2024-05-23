import React, { useEffect, useState } from 'react';
import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import WhyUsItem, { SbPostProps } from './WhyItem';
import { getStoryblokApi } from '@storyblok/react';
import Link from 'next/link';
import styles from './Why.module.scss';

interface PostData extends SbBlokData, SbPostProps {
  title: string;
  heading: string;
  section: string;
}

interface ListingProps {
  title:string
  content: SbBlokData
}
interface IProps {
    blok: ListingProps;
  }
  

const WhyContainer: React.FC<IProps> = ({ blok }) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get('cdn/stories', {
          version: 'published',
          starts_with: 'rumors',
          content_type: 'WhyUsItem',
        });

    
        const stories = data.stories.map((story: any) => ({
          title: story.content.title,
          heading: story.content.heading,
          section: story.content.section,
          
        }));

        setPosts(stories);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchAllPosts();
  }, []);
 
  return (
    <div>
      <h2 className='mb-8 text-2xl font-bold lg:text-3xl'>{blok.title}</h2>
 {posts.map((post, index) => (
<div className={styles['why-us-item']} {...storyblokEditable(post)}>
<div className={styles['why-us-item-title']}>
  <h1>{post.title}</h1>
</div>
<div className={styles['why-us-item-content']}>
  <h2>{post.heading}</h2>
  <p>{post.section}</p>
</div>
</div>
        ))}



    
  
  </div>
  );
};

export default WhyContainer;

