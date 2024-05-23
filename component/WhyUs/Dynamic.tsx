// DynamicComponent.tsx
import React from 'react';
import components from '../../components/Component';

// const components = {
//     feature: Feature,
//     grid: Grid,
//     teaser: Teaser,
//    page: Page,
//     text: Text,
//     blogPost:BlogPost,
//     blogListing:BlogListing,
//     landingPage:LandingPage,
//     flex:Flex,
//     container:Container,
//     heading:Heading,
//     aboutUs:AboutPage,
//     WhyUsItem:WhyUsItem,
//     whyContainer:WhyContainer
//   };
  

const DynamicComponent: React.FC<{ blok: any }> = ({ blok }) => {
  if (!blok || !blok.component) {
    return null;
  }

  const Component = components[blok.component];

  if (!Component) {
    return <p>Unknown component: {blok.component}</p>;
  }

  return <Component blok={blok} />;
};

export default DynamicComponent;
