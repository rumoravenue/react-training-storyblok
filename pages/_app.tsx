import '../styles/globals.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser/Teaser';
import Text from '../components/Text';
import BlogPost from '../components/BlogPost';
import BlogListing from '../components/blogListing';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  text: Text,
  blogPost: BlogPost,
  blogListing: BlogListing
};

storyblokInit({
  accessToken: 'kQDhuHseivSQAbObeBI8zwtt',
  use: [apiPlugin],
  components,
  apiOptions: {
    region: '',
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

storyblokInit({
  accessToken: 'hKznAHbqvmLeRv2ZrnQl8Qtt',
  use: [apiPlugin],
  components,
});



export default MyApp;
