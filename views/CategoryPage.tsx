
import React, { useState, useEffect } from 'react';
import { CATEGORIES, PHOTOS } from '../constants';
import MasonryGrid from '../components/MasonryGrid';
import BackButton from '../components/BackButton';
import Lightbox from '../components/Lightbox';

interface CategoryPageProps {
  categoryId: string;
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, onBack }) => {
  const category = CATEGORIES.find(c => c.id === categoryId);
  const photos = PHOTOS[categoryId] || [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % photos.length);
    }
  };
  
  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen p-4 sm:p-8">
        <header className="mb-8 flex items-center justify-between">
          <BackButton onClick={onBack} />
          <h1 className="text-3xl sm:text-4xl font-serif text-neutral-100 capitalize">
            {category?.name || 'Gallery'}
          </h1>
          <div className="w-24"></div> {/* Spacer to balance the header */}
        </header>
        <main>
          <MasonryGrid photos={photos} onPhotoClick={openLightbox} />
        </main>
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      )}
    </>
  );
};

export default CategoryPage;