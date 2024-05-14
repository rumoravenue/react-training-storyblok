import '../styles/globals.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser/Teaser';
import Text from '../components/Text';
import BlogPost from '../components/BlogPost';
import BlogListing from '../components/BlogListing/BlogListing';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  text: Text,
  blogPost: BlogPost,
  BlogListing:BlogListing,
};

storyblokInit({
  accessToken: 'Fr12Q4aUQeFk5rQ07DW5DAtt',
  use: [apiPlugin],
  components,
  apiOptions: { 
    region: '',
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
