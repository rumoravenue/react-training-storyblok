import '../styles/globals.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser/Teaser';
import Text from '../components/Text';
import BlogPost from '../components/BlogPost';
import BlogListing from '../components/BlogListing';

import Flex from '../components/Flex';
import Heading from '../components/Heading';
import AboutPage from '../component/AboutPage/AboutUs';
import WhyUsItem from '../component/WhyUs/WhyItem';

import CustomerPage from '../component/CustomerPage/Custome';
import FaqPage from '../component/FAQ/FaqPage';
import Section from '../components/Section';
import {TechnologiesItem} from '../component/Technology/TechnologiesItem';
import Spacer from '../components/Spacer';
import CustomerItem from '../component/CustomerPage/Custome';
import ProcessItem from '../component/Technology/ProcessItem';
import Button from '../components/Button';
import Line from '../components/Line';
import { CaseStudyItem } from '../component/CaseStudyItem';
import Navbar from '../components/Navbar';
import Testimonial from '../component/Technology/TestimonalItem';
import Carousel from '../component/Technology/Carousel';
import Marquee from '../components/Marquee';
import Footer from '../components/Footers';
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
 page: Page,
  text: Text,
  blogPost:BlogPost,
  blogListing:BlogListing,
  navbar:Navbar,
  flex:Flex,
  spacer: Spacer,
  heading:Heading,
  aboutUs:AboutPage,
  WhyUsItemCopy:WhyUsItem,
  carousel: Carousel,
  testimonial: Testimonial,
  marquee:Marquee,
  technologies:TechnologiesItem,
 footer:Footer,
  customerItem:CustomerItem,
  faq:FaqPage,
  section: Section,
  processItem:ProcessItem,
  button:Button,
  line:Line,
  casestudyItem:CaseStudyItem
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
  return <Component {...pageProps} />;
}

export default MyApp;
