import '../styles/globals.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser/Teaser';
import Text from '../components/Text';
import BlogPost from '../components/BlogPost';
import BlogListing from '../components/BlogListing';
import LandingPage from '../component/LandingPage/LandingPage';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import AboutPage from '../component/AboutPage/AboutUs';
import WhyUsItem from '../component/WhyUs/WhyItem';
import WhyContainer from '../component/WhyUs/WhyContainer';
import TechnologiesPage from '../component/Technology/Technologies';
import CustomerPage from '../component/CustomerPage/Custome';
import FaqPage from '../component/FAQ/FaqPage';


const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
 page: Page,
  text: Text,
  blogPost:BlogPost,
  blogListing:BlogListing,
  landingPage:LandingPage,
  flex:Flex,
  
  heading:Heading,
  aboutUs:AboutPage,
  WhyUsItem:WhyUsItem,
  whyContainer:WhyContainer,
  technologiesPage:TechnologiesPage,
  customerReview:CustomerPage,
  faq:FaqPage
};

storyblokInit({
  accessToken: 'j8jwtF7M6I1OeZctxlxMJAtt',
  use: [apiPlugin],
  components,
  apiOptions: {
    region: '',
  },
});

function MyApp({ Component, pageProps }) {
  // console.log(Component,pageProps,"hhhhhhhhhhhhh")
  return <Component {...pageProps} />;
}

export default MyApp;
