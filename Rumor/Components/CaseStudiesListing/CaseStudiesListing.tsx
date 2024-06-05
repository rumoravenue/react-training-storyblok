import { ISbRichtext, ISbStoryData, getStoryblokApi } from '@storyblok/react';
import React, { useEffect, useState } from 'react';
import { Richtext } from '../../../components/Richtext';
import clsx from 'clsx';

interface StoriesData {
  stories: ISbStoryData[];
}

const CasestudiesListing = () => {
  const [data, setData] = useState<StoriesData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const response = await storyblokApi.getStories({
          content_type: 'caseStudies',
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
    <div className='m-auto flex justify-center gap-8 sm:flex-col sm:items-center sm:justify-center sm:gap-10 md:flex-col md:items-center md:justify-center md:gap-10 '>
      {' '}
      {data &&
        data.stories &&
        data.stories.map((story) => {
          return (
            <div
              key={story.id}
              className='flex max-w-[290px] flex-col gap-5 rounded-xl border-2 border-gray-300 pb-6'
            >
              <div className='poster'>
                <img
                  src={story.content.poster.filename}
                  alt='poster'
                  className='rounded-lg border-[20px] border-[#1D201F]'
                />
              </div>
              <div className='usp flex gap-3 px-3 text-xs sm:flex-col md:flex-col lg:flex-col'>
                <Richtext
                  content={story.content.orgUSP.content[0].content[0].text}
                  className='rounded-2xl border border-gray-500 px-4 py-1'
                />
                <Richtext
                  content={story.content.readtime.content[0].content[0].text}
                  className='rounded-2xl border border-gray-500 px-4 py-1'
                />
              </div>
              <div className='orgdesc px-5'>
                <Richtext
                  content={story.content.orgDesc.content[0].content[0].text}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CasestudiesListing;
