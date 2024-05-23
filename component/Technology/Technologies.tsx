// import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
// import React from 'react';
// import styles from './TechnologiesPage.module.scss';

// export interface ResourcesProps extends SbBlokData {
//   title1: string;
//   title2: string;
//   description1: string;
//   description2: string;
//   technologies: {
//     text: string;
//     icons: {
//       filename: string;
//     };
//     color: {
//       color: string;
//     };
//   }[];
// }

// interface IProps {
//   blok: ResourcesProps;
// }

// const TechnologiesPage: React.FC<IProps> = ({ blok }) => {
//   console.log(blok.process, 'blok');

//   return (
//     <div className={styles.bgBlack} {...storyblokEditable(blok)}>
//       <h2 className={styles.title}>{blok.title1}</h2>
//       <div className={styles.technologiesContainer}>
//         {blok.technologies.map((tech, index) => {
//           console.log(`Text: ${tech.text}, Color: ${tech.color.color}, Icon: ${tech.icons.filename}`);
//           return (
//             <div
//               key={index}
//               className={styles.technologyCard}
//               style={{ backgroundColor: tech.color.color }}
//             >
//               <img
//                 src={tech.icons.filename}
//                 alt={`${tech.text} icon`}
//                 className={styles.technologyIcon}
//               />
//               <p className={styles.technologyName}>{tech.text}</p>
//             </div>
//           );
//         })}
//       </div>
//       <div className={styles.footer}>{blok.description1}</div>
//       <div className={styles.title}>{blok.title2}</div>
//       <div className={styles.footer2}>{blok.description2}</div>
//     </div>
//   );
// };

// export default TechnologiesPage;











import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
import React from 'react';
import styles from './TechnologiesPage.module.scss';

export interface ResourcesProps extends SbBlokData {
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  technologies: {
    text: string;
    icons: {
      filename: string;
    };
    color: {
      color: string;
    };
  }[];
  process: {
    heading: string;
    description: string;
  }[];
}

interface IProps {
  blok: ResourcesProps;
}

const TechnologiesPage: React.FC<IProps> = ({ blok }) => {
  

  return (
    <div className={styles.bgBlack} {...storyblokEditable(blok)}>
      <h2 className={styles.title}>{blok.title1}</h2>
      <div className={styles.technologiesContainer}>
        {blok.technologies.map((tech, index) => {
          return (
            <div
              key={index}
              className={styles.technologyCard}
              style={{ backgroundColor: tech.color.color }}
            >
              <img
                src={tech.icons.filename}
                alt={`${tech.text} icon`}
                className={styles.technologyIcon}
              />
              <p className={styles.technologyName}>{tech.text}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>{blok.description1}</div>
      <div className={styles.title}>{blok.title2}</div>
      <div className={styles.footer2}>{blok.description2}</div>
      
      {/* Process Steps */}
      <div className={styles.processContainer}>
        {blok.process.map((step, index) => (
            <div>
          <div key={index} className={styles.processStep}>
            <div className={styles.stepNumber}>{index+1}</div>
            <div className={styles.stepTitle}>{step.heading}</div>
            <div className={styles.stepDescription}>{step.description}</div>
            </div>
            <div className={styles.dottedLine}></div>

            </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesPage;
