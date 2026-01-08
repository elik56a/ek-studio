'use client';

import { useState } from 'react';
import { Skeleton } from '@ek-studio/ui';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
}

export function ImageWithSkeleton({ 
  skeletonClassName, 
  className,
  alt = '',
  ...props 
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative inline-block">
      {!isLoaded && (
        <Skeleton className={skeletonClassName || className} />
      )}
      <img
        {...props}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
