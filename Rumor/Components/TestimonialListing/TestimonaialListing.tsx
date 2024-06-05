import { ISbStoryData, getStoryblokApi } from '@storyblok/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Richtext } from '../../../components/Richtext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface StoriesData {
  stories: ISbStoryData[];
}

const TestimonialListing = () => {
  const [data, setData] = useState<StoriesData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const response = await storyblokApi.getStories({
          content_type: 'testimonial',
          per_page: perPage,
          page: currentPage,
        });
        setData(response.data);

        const total = Math.ceil(response.total / perPage);
        setTotalPages(total);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, [currentPage]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows : false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentPage(next + 1),
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
      {data && data.stories && (
        <Slider {...settings}>
          {data.stories.map((story) => (
            <div
              key={story.id}
              className='testimonial flex flex-col items-center gap-6 text-white'
            >
              <div className='testimonial-headline pb-12 text-center'>
                <h2 className=' font-bold italic'>
                  {story.content.feature.content[0].content[0].text}
                </h2>
              </div>
              <div className='testimonial-description flex flex-col items-center gap-4 border-y py-6'>
                <div className='td-text w-2/4 text-center'>
                  {story.content.description.content[0].content[0].text}
                </div>
                <div className='customercard flex gap-4'>
                  <div className='customer-photo'>
                    <img
                      src={story.content.customerPhoto.filename}
                      alt='customer-photo'
                      className='h-auto w-12 rounded-full'
                    />
                  </div>
                  <div className='customer-data flex flex-col'>
                    <Richtext
                      content={
                        story.content.customerName.content[0].content[0].text
                      }
                    />
                    <div className='company-data flex gap-3'>
                      <Richtext
                        content={
                          story.content.customerPosition.content[0].content[0]
                            .text
                        }
                      />
                      <Richtext
                        content={
                          story.content.customerCompanyName.content[0]
                            .content[0].text
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <div className='pagination flex justify-center text-white'>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            style={{
              margin: '0 5px',
              padding: '10px 20px',

              color: currentPage === pageNumber ? '#fff' : '#808080',

              cursor: 'pointer',
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};

export default TestimonialListing;
