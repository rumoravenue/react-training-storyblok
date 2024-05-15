import React, { useEffect, useState } from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { getStoryblokApi } from '@storyblok/react';
import Link from 'next/link'; // Import Link from next/link

interface BlogPost extends SbBlokData {
  id?: string;
  slug?: string;
  name?: string;
  content?: {
    media?: {
      filename: string;
    };
    title?: string;
  };
}

interface LandingPageProps {
  blok: BlogPost; // Adjust the type according to your Storyblok blok type
}

const LandingPage: React.FC<LandingPageProps> = ({ blok }) => {
  const [data, setData] = useState<BlogPost[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(3);

  useEffect(() => {
    const fetchData = async () => {
      const storyblokApi = getStoryblokApi();

      try {
        const { data } = await storyblokApi.getStories({
          content_type: 'blogPost',
        });
        setData(data.stories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Logic to calculate index of first and last card on current page
  const indexOfLastCard: number = currentPage * cardsPerPage;
  const indexOfFirstCard: number = indexOfLastCard - cardsPerPage;
  const currentCards: BlogPost[] | [] = data
    ? data.slice(indexOfFirstCard, indexOfLastCard)
    : [];

  // Function to handle pagination
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <main {...storyblokEditable(blok)}>
      <div className='mt-4  flex flex-wrap border-2 text-center '>
        {currentCards.map((item) => (
          <Link key={item.id} href={`/blog/${item.slug}`} passHref>
            <a className='m-4 ml-10 max-w-xs overflow-hidden rounded shadow-lg'>
              <div>
                <img
                  src={item.content.media.filename}
                  alt=''
                  className='w-full'
                />
                <div className='px-6 py-4'>
                  <div className='mb-2 text-xl font-bold'>{item.name}</div>
                  <p className='text-base text-gray-700'>
                    {item.content.title}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      {/* Pagination buttons */}
      <div className='mx-auto mt-4 '>
        {data && (
          <nav className=''>
            <ul className=' flex justify-center'>
              {Array.from(
                { length: Math.ceil(data.length / cardsPerPage) },
                (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      i + 1 === currentPage ? 'active' : ''
                    }`}
                  >
                    <button
                      className={`m-2 rounded-sm p-1 text-white ${
                        i + 1 === currentPage ? 'bg-black' : 'bg-blue-400'
                      }`}
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </div>
    </main>
  );
};

export default LandingPage;
