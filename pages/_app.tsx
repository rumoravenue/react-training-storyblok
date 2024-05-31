import '../styles/globals.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser/Teaser';
import Text from '../components/Text';
import BlogPost from '../components/BlogPost';
import LandingPage from '../components/LandingPage';
import Section from '../components/Rumor/Section';

import Component from '../components/Rumor/Component';
import Spacer from '../components/Rumor/Spacer';
import Button from '../components/Rumor/Button';
import AboutList from '../components/Rumor/AboutList';
import TechCard from '../components/Rumor/TechCard';
import CustomerReview from '../components/Rumor/CustomerReview';
import FAQ from '../components/Rumor/FAQ';
import OurProcess from '../components/Rumor/OurProcess';
import AboutPage from '../components/Rumor/AboutPage';
import CaseStudie from '../components/Rumor/CaseStudie';
import Footer from '../components/Rumor/Footer';
import Testimonial from '../components/Rumor/Testimonial';
import Header from '../components/Rumor/Header';
import Flex from '../components/Rumor/Flex';
import Marquee from '../components/Rumor/Marquee';

const components = {
  Header,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  text: Text,
  blogPost: BlogPost,
  blog: LandingPage,
  section: Section,
  Component,
  Button,
  spacer: Spacer,
  About_List: AboutList,
  Card: TechCard,
  Customer_Reviews: CustomerReview,
  FAQ,
  Testimonial,
  Our_Process: OurProcess,
  About_page: AboutPage,
  CaseStudies: CaseStudie,
  Footer,
  flex: Flex,
  marquee: Marquee,
};

storyblokInit({
  accessToken: 'EhKyYNvPzpyFwVeAjQbL5Att',
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
