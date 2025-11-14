
import React from 'react';
import type { Photo } from '../types';

interface MasonryGridProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ photos, onPhotoClick }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="mb-4 sm:mb-6 break-inside-avoid"
          onClick={() => onPhotoClick(index)}
        >
          <div className="relative overflow-hidden rounded-md shadow-lg group cursor-pointer">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;