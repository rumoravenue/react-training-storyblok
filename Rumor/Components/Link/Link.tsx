import { SbBlokData, storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';
import { CSSProperties, FC } from 'react';

interface sbLinkProps extends SbBlokData {
  linkName?: string;
  textSize?: 'sm' | 'md' | 'xl';
  textColor?: string;
}

interface LinkProps {
  blok: sbLinkProps;
}

const textSizeMap: Record<string, string> = {
  sm: 'text-base', // 1rem
  md: 'text-lg', // 1.25rem
  xl: 'text-2xl', // 1.75rem
};

const Link: FC<LinkProps> = ({ blok }) => {
  const { linkName, textSize = 'md', textColor } = blok;
  const style: CSSProperties = {};

  textColor && (style.color = textColor);

  return (
    <div {...storyblokEditable(blok)}>
      <p className={clsx(textSizeMap[textSize])} style={style}>
        {linkName}
      </p>
    </div>
  );
};

export default Link;
