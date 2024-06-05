import { ISbStoryData, getStoryblokApi } from '@storyblok/react';
import React, { useEffect, useState } from 'react';
import { Richtext } from '../../../components/Richtext';

interface StoriesData {
  stories: ISbStoryData[];
}

const FAQListing = () => {
  const [data, setData] = useState<StoriesData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const response = await storyblokApi.getStories({
          content_type: 'faq',
        });
        setData(response.data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data &&
        data.stories &&
        data.stories.map((story) => {
          const { question, answer } = story.content; 
          return (
            <div
              key={story.id}
              className='w-full max-w-screen-xl px-16 sm:px-0'
            >
              <div className=' w-full flex flex-col  border-b border-black'>
                <div className='py-5'>
                  <details className='group'>
                    <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                      <p>{story.content.answer.content[0].content[0].text}</p>
                      <span className='transition group-open:rotate-180'>
                        <svg
                          fill='none'
                          height='24'
                          shape-rendering='geometricPrecision'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='1.5'
                          viewBox='0 0 24 24'
                          width='24'
                        >
                          <path d='M6 9l6 6 6-6'></path>
                        </svg>
                      </span>
                    </summary>

                    <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                      {story.content.question.content[0].content[0].text}
                    </p>
                  </details>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default FAQListing;
