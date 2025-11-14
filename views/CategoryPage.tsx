
import React, { useState, useEffect } from 'react';
import { CATEGORIES, PHOTOS } from '../constants';
import MasonryGrid from '../components/MasonryGrid';
import Lightbox from '../components/Lightbox';
import Footer from '../components/Footer';
import { Photo } from '../types';

interface CategoryPageProps {
  categoryId: string;
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, onBack }) => {
  const category = CATEGORIES.find(c => c.id === categoryId);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const shuffle = <T,>(arr: T[]): T[] => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

    const photoLoader = PHOTOS[categoryId];
    if (photoLoader) {
      photoLoader()
        .then((items) => {
          if (cancelled) return;
          const heights = [900, 1000, 1100, 1200, 1300];
          const mapped = shuffle(items).map((item: any, idx: number) => ({
            id: idx + 1,
            src: item.src || item.fullSrc,
            alt: item.alt || `${categoryId} photo`,
            width: 800,
            height: pick(heights),
          }));
          setPhotos(mapped);
        })
        .catch(() => {
          setPhotos([]);
        });
    } else {
      setPhotos([]);
    }

    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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
      <div className="w-full min-h-screen p-0 sm:p-0">
        <section className="w-full flex flex-col items-center justify-center pt-6 sm:pt-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-center sm:ml-32">
              <img
                src="/images/Sohan.png"
                alt="Sohan"
                className="w-[24rem] h-auto sm:w-[28rem] object-contain"
              />
            </div>
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-neutral-100 capitalize tracking-wide">
            {category?.name || 'Gallery'}
          </h2>
        </section>

        <header className="px-4 sm:px-8 mt-6 mb-4 flex items-center justify-between">
          <div className="w-24" />
          <div className="w-24" />
        </header>
        <main className="p-4 sm:p-8">
          <MasonryGrid photos={photos} onPhotoClick={openLightbox} />
        </main>
        
        <section className="w-full flex items-center justify-center p-4 sm:p-8 pb-12 sm:pb-16">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-white text-black font-serif text-lg tracking-wide rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Back to Home
          </button>
        </section>
      </div>
      <Footer />
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
