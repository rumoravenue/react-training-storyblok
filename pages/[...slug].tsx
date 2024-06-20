import Head from 'next/head';
import Layout from '../components/Layout';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoriesParams,
} from '@storyblok/react';

export default function Page({ story, locales, locale }) {
  story = useStoryblokState(story, {
    language: locale,
  });
  return (
    <div>
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Layout locales={locales} locale={locale}>
        <StoryblokComponent blok={story.content} locale={locale} />
      </Layout>
    </div>
  );
}

export async function getStaticProps({
  params,
  locales,
  locale,
  defaultLocale,
  preview,
}) {
  let slug = params.slug ? params.slug.join('/') : 'home';
  let sbParams: ISbStoriesParams = {
    version: preview ? 'draft' : 'published',
    language: locale,
    resolve_relations: ['blogPost.author'],
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  return {
    props: {
      locales: locales || [],
      locale: locale || null,
      defaultLocale: defaultLocale || null,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths({ locales }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'published',
  });
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');
  });
  return {
    paths: paths,
    fallback: false,
  };
}
