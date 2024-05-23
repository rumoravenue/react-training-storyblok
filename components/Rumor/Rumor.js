import { storyblokEditable } from '@storyblok/react';
import { getStoryblokApi } from '@storyblok/react';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import TechAndResource from './TechAndResource';
import CustomerStories from './CustomerStories';
import Testimonial from './Testimonial';
import Faq from './Faq';
import CaseStudies from './CaseStudies';

const Rumor = ({ blok }) => {
  const [data, setData] = useState(null);

  const navbarList = data?.content?.Navbar?.[0]?.list;
  const heroSection = data?.content?.HeroSection?.[0];
  const about = data?.content?.AboutPage?.[0];
  const TechAndResources = data?.content?.TechAndResource?.[0];
  const customerStories = data?.content?.CustomerStories?.[0];
  const testimonial = data?.content?.Testimonials[0];
  const faqData = data?.content?.Faq?.[0];
  const caseStudy = data?.content?.CaseStudies?.[0];
  console.log(data?.content);

  useEffect(() => {
    const fetchData = async () => {
      const storyblokApi = getStoryblokApi();

      try {
        const { data } = await storyblokApi.getStories({
          content_type: 'Rumor',
        });

        setData(data?.stories?.[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main
      // className='h-screen w-full bg-black text-white'
      {...storyblokEditable(blok)}
    >
      <Navbar navbar={navbarList} />
      <hr />
      <HeroSection heroSection={heroSection} />
      <About about={about} />
      <TechAndResource TechAndResource={TechAndResources} />
      <CustomerStories customerStories={customerStories} />
      <Testimonial testimonial={testimonial} />
      <Faq faqData={faqData} />
      <CaseStudies caseStudy={caseStudy} />
    </main>
  );
};

export default Rumor;
