import React, { useEffect, useState } from 'react';
import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import BlogPost, { SbBlogPostProps } from './BlogPost';
import { Author } from '../types';
import { getStoryblokApi } from '@storyblok/react';
import Link from 'next/link';
import Pagination from "./Pagination"

interface BlogPostData extends SbBlokData, SbBlogPostProps {
  title: string;
  content: ISbRichtext;
  author: Author;
  media: any;
  description: string;
}

interface BlogListingProps {
  // Add any props you need here
}

const BlogListing: React.FC<BlogListingProps> = () => {
  const [posts, setPosts] = useState<BlogPostData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.getStories({
          content_type: 'blogPost',
        });
        const allPosts: BlogPostData[] = data.stories.map((post: any) => ({
          title: post.content.title,
          content: post.slug,
          author: post.content.author,
          media: post.content.media.filename,
          description: post.content.description,
        }));
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchAllPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='mx-auto max-w-7xl py-12 px-12 lg:py-16 lg:px-20'>
      <h2 className='mb-8 text-2xl font-bold lg:text-3xl'>Latest Blog Posts</h2>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {currentPosts.map((post, index) => (
          <Link key={index} href={`/blog/${post.content}`} passHref>
            <div className='blog-post'>
              <img src={post.media} alt={post.title} className='post-image mt-4 w-full' />
              <h2 className='text-xl font-semibold'>{post.title}</h2>
              <p className='mt-2 text-gray-600'>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>

     
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default BlogListing;
