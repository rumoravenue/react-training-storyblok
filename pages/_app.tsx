import '../styles/globals.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser/Teaser';
import Text from '../components/Text';
import BlogPost from '../components/BlogPost';
import BlogListing from '../components/BlogListing/BlogListing';
import Header from '../Rumor/Components/Header/Header';

import Link from '../Rumor/Components/Link/Link';

import Banner from '../Rumor/Components/Banner/Banner';
import AboutUs from '../Rumor/Components/AboutUS/AboutUs';
import WhyUs from '../Rumor/Components/WhyUS/WhyUs';
import Card from '../Rumor/Components/Card/Card';
import Technology from '../Rumor/Components/Technology/Technology';
import TechnologyCard from '../Rumor/Components/TechnologyCard/TechnologyCard';
import Section from '../Rumor/Components/Section/Section';
import ListItem from '../Rumor/Components/ListItem/ListItem';
import ListGroup from '../Rumor/Components/ListGoup/ListGroup';
import Marquee from '../Rumor/Components/Marquee/Marquee';
import CustomerStories from '../Rumor/Components/Customer Servies/CustomerStories';
import Spacer from '../Rumor/Components/Spacer/Spacer';
import Flex from '../Rumor/Components/FLex/Flex';
import Testimonial from '../Rumor/Components/Testimonial/Testimonail';
import TestimonaialListing from '../Rumor/Components/TestimonialListing/TestimonaialListing';
import CTA from '../Rumor/Components/CTA/CTA';
import AccordionCustomIcon from '../Rumor/Components/FAQ/AccordionCustomIcon';
import FAQListing from '../Rumor/Components/FAQListing/FAQListing';
import Casestudies from '../Rumor/Components/CaseStudies/Casestudies';
import CasestudiesListing from '../Rumor/Components/CaseStudiesListing/CaseStudiesListing';
import Image from '../Rumor/Components/Image/Image';
import RumorFooter from '../Rumor/Components/Footer/Footer';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  text: Text,
  blogPost: BlogPost,
  BlogListing: BlogListing,
  header: Header,
  link: Link,
  section: Section,
  banner: Banner,
  aboutUS: AboutUs,
  whyUs: WhyUs,
  card: Card,
  technology: Technology,
  technologyCard: TechnologyCard,
  listItem: ListItem,
  listGroup: ListGroup,
  marquee: Marquee,
  customerStories: CustomerStories,
  spacer: Spacer,
  flex: Flex,
  testimonial: Testimonial,
  testimonialListing: TestimonaialListing,
  CTA: CTA,
  faq: AccordionCustomIcon,
  faqListing: FAQListing,
  caseStudies: Casestudies,
  caseStudiesListing: CasestudiesListing,
  image: Image,
  rumorFooter: RumorFooter,
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
