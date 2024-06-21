import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react';

interface BlogPost {
  title: string;
  slug: string;
}

const BlogListing: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const storyblokApi = getStoryblokApi();
      const sbParams: ISbStoriesParams = {
        version: 'published',
        content_type: 'blogPost',
        resolve_relations: ['blogPost.author'],
      };

      const { data } = await storyblokApi.getStories(sbParams);
      console.log('Fetched blog posts:', data.stories);

      const posts: BlogPost[] = data.stories.map((story) => ({
        title: story.content.title,
        slug: story.slug,
      }));
      setBlogPosts(posts);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="blog-listing">
      <h1>Blog Posts</h1>
      <div className="grid">
        {blogPosts.map((post) => (
          <div key={post.slug} className="blog-post">
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
