
import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import styles from './LandingPage.module.scss';

export interface SbBlogPostProps extends SbBlokData {
  title: string;
  button1: string;
  button2: string;
  description: string;
}

interface IProps {
  blok: SbBlogPostProps;
}

const LandingPage: React.FC<IProps> = ({ blok }) => {
 

  const splitTitleByWords = (
    title: string,
    words: number
  ): [string, string] => {
    const wordsArray = title.split(' ');
    const firstPart = wordsArray.slice(0, words).join(' ');
    const secondPart = wordsArray.slice(words).join(' ');
    return [firstPart, secondPart];
  };
  const [firstPart, secondPart] = splitTitleByWords(blok.title, 2);

  return (
    <div
      className={`${styles['landing-page']} text-center bg-black`}
      {...storyblokEditable(blok)}
    >
      <h1 className={`${styles['heading']} text-white text-[50px] font-semibold`}>
        <span>{firstPart}</span>
        <br />
        <span>{secondPart}</span>
      </h1>
      <p className=" text-[15px] font-normal text-yellow-500 pl-[30%] pr-[30%]">{blok.description}</p>
      <div className={styles['flex-container']}>
        <div className={styles['flex-item']}>
          <button className={styles['button']}>{blok.button1}</button>
        </div>
        <div className={styles['flex-item']}>
          <button className={styles['button']}>{blok.button2}</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;




// import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
// import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
// import React from 'react';

// export interface SbBlogPostProps extends SbBlokData {
//   title: string;
//   button1: string;
//   button2: string;
//   description: string;
// }

// interface IProps {
//   blok: SbBlogPostProps;
// }

// const LandingPage: React.FC<IProps> = ({ blok }) => {
//   const splitTitleByWords = (
//     title: string,
//     words: number
//   ): [string, string] => {
//     const wordsArray = title.split(' ');
//     const firstPart = wordsArray.slice(0, words).join(' ');
//     const secondPart = wordsArray.slice(words).join(' ');
//     return [firstPart, secondPart];
//   };

//   const [firstPart, secondPart] = splitTitleByWords(blok.title, 2);

//   return (
//     <Box
//       height="500px"
//       bg="black"
//       textAlign="center"
//       {...storyblokEditable(blok)}
//     >
//       <Heading as="h1" textColor="white" fontSize="60px" fontWeight="700" pt="2.25rem">
//         <Box as="span" display="block">
//           {firstPart}
//         </Box>
//         <Box as="span" display="block">
//           {secondPart}
//         </Box>
//       </Heading>
//       <Text
//         fontSize="14px"
//         fontWeight="400"
//         color="#ffb800"
//         px="31%"
//         mt={4}
//       >
//         {blok.description}
//       </Text>
//       <Flex justifyContent="center" alignItems="center" mt={6}>
//         <Button
//           mx="1%"
//           mt="2%"
//           px="4%"
//           py={3}
//           bg="transparent"
//           color="white"
//           border="1px solid white"
//           borderRadius="12px"
//           _hover={{ bg: '#0056b3', color: 'white' }}
//         >
//           {blok.button1}
//         </Button>
//         <Button
//           mx="1%"
//           mt="2%"
//           px="4%"
//           py={3}
//           bg="transparent"
//           color="white"
//           border="1px solid white"
//           borderRadius="12px"
//           _hover={{ bg: '#0056b3', color: 'white' }}
//         >
//           {blok.button2}
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default LandingPage;
