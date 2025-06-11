'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  fallbackText?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width = 64,
  height = 64,
  className,
  fallbackSrc,
  fallbackText
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (fallbackSrc && !hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
    }
  };

  if (hasError && !fallbackSrc) {
    // Show a styled placeholder when image fails to load
    return (
      <div 
        className={cn(
          "bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-semibold",
          className
        )}
        style={{ width, height }}
      >
        {fallbackText || alt.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}
