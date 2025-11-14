
import React, { useEffect } from 'react';
import type { Photo } from '../types';

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photos, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const currentPhoto = photos[currentIndex];

  if (!currentPhoto) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-[60]"
        aria-label="Close image viewer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Image and Nav */}
      <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
         {/* Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white/70 hover:text-white hover:bg-black/50 transition-all z-[60]"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl rounded-sm"
        />

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white/70 hover:text-white hover:bg-black/50 transition-all z-[60]"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
