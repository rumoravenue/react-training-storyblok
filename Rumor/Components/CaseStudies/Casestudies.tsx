import {
  ISbRichtext,
  ISbStoryData,
  SbBlokData,
  getStoryblokApi,
} from '@storyblok/react';
import React, { useEffect, useState } from 'react';
import { Asset } from '../../../types';
import { Richtext } from '../../../components/Richtext';
interface sbCasestudiesProps extends SbBlokData {
  poster?: Asset;
  orgUSP?: ISbRichtext;
  readtime?: ISbRichtext;
  orgDesc?: ISbRichtext;
}

interface CasestudiesProps {
  blok: sbCasestudiesProps;
}

const Casestudies: React.FC<CasestudiesProps> = ({ blok }) => {
  const { poster, orgDesc, orgUSP, readtime } = blok;

  return (
    <>
    <img src={poster.filename} alt="" />
    <Richtext content={orgUSP}/>
    <Richtext content={orgDesc}/>
    <Richtext content={readtime}/>
    </>
  );
};

export default Casestudies;
