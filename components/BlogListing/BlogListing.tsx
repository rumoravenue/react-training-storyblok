import React, { useEffect, useState } from 'react';
import { ISbStoryData, SbBlokData, getStoryblokApi } from '@storyblok/react';
import styles from './BlogListing.module.scss';
import Link from 'next/link';

interface StoriesData {
  stories: ISbStoryData[];
}

const BlogListing = () => {
  const [data, setData] = useState<StoriesData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const response = await storyblokApi.getStories({
          content_type: 'blogPost',
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data || !data.stories) {
    console.error('No blog posts found');
    return null;
  }

  console.log(data);

  return (
    <div className='mx-20 flex flex-wrap justify-center'>
      {data.stories
        .slice()
        .reverse()
        .map((story, index) => (
          <Link href={story.full_slug} key={index}>
            <a className='w-full p-4 sm:w-1/2 md:w-1/3'>
              <div className='transform overflow-hidden rounded-lg bg-white shadow-md transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-xl'>
                <img
                  src={story.content.media.filename}
                  alt=''
                  className='h-40 w-full '
                />
                <div className='p-4'>
                  <h2 className='mb-2 text-xl font-semibold text-gray-800'>
                    {story.name}
                  </h2>
                  <p className='h-24 overflow-hidden text-gray-600'>
                    {story.content.content.content[0].content[0].text}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default BlogListing;
