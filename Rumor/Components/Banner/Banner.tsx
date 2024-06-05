    import Link from 'next/link';
    import { Richtext } from '../../../components/Richtext';
    import { ISbRichtext, SbBlokData, storyblokEditable } from '@storyblok/react';
    import { Asset } from '../../../types';
    import styles from './Banner.module.scss';
    import clsx from 'clsx';

    interface sbBannerProps extends SbBlokData {
    strategicOverseas?: ISbRichtext;
    letUS?: ISbRichtext;
    getStartedCTA?: string;
    learnMoreCTA?: string;
    bannerImage?: Asset;
    }

    interface bannerPorps {
    blok: sbBannerProps;
    }

    const Banner: React.FC<bannerPorps> = ({ blok }) => {
    const { bannerImage } = blok;
    return (
        <>
        <div
            className='banner flex flex-col items-center bg-black  text-center text-white gap-12'
            {...storyblokEditable(blok)}
        >
            <Richtext
            content={blok.strategicOverseas}
            className={clsx(styles.poppins, styles.strategic ,' sm:text-2xl ')}
            />
            <Richtext
            content={blok.letUS}
            className={clsx(styles.poppins, styles.letUS)}
            />
            <div className='bannerCTA flex gap-8'>
            <Link href='#'>
                <a
                style={{
                    color: 'currentColor',
                    border: '1px solid transparent',
                    backgroundImage:
                    'linear-gradient(#000, #000), linear-gradient(135.39deg, #ef2d56 8.67%, #ffb800 37.82%, #affc41 63.65%, #4bc6b9 90.65%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                }}
                className='flex  h-16 w-64 items-center justify-center rounded-full p-6'
                >
                {blok.getStartedCTA}
                </a>
            </Link>

            <Link href='#'>
                <a
                style={{
                    color: 'currentColor',
                    border: '1px solid transparent',
                    backgroundImage:
                    'linear-gradient(#000, #000), linear-gradient(135.39deg, #ef2d56 8.67%, #ffb800 37.82%, #affc41 63.65%, #4bc6b9 90.65%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                }}
                className='flex  h-16 w-64 items-center justify-center rounded-full p-6'
                >
                {blok.learnMoreCTA}
                </a>
            </Link>
            </div>

            <img
            src={bannerImage.filename}
            alt='bannerImage'
            className={styles.bannerImage}
            />
        </div>
        </>
    );
    };

    export default Banner;
