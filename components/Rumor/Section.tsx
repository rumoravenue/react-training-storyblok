import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Section = ({ blok }) => {
  const bgColor = blok.BackGroundColor.color;
  const padding_top = blok.Padding_top;
  const padding_bottom = blok.Padding_bottom;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        paddingTop: `${padding_top}rem`,
        paddingBottom: `${padding_bottom}rem`,
      }}
      {...storyblokEditable(blok)}
    >
      {blok.body &&
        blok.body.map((nestedBlok) => (
          <StoryblokComponent
            blok={nestedBlok}
            key={nestedBlok._uid}
            backgroundColor={bgColor}
          />
        ))}
    </div>
  );
};

export default Section;
