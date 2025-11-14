
import React, { useState, useEffect } from 'react';
import { CATEGORIES, PHOTOS } from '../constants';
import MasonryGrid from '../components/MasonryGrid';
import Lightbox from '../components/Lightbox';
import Footer from '../components/Footer';

interface CategoryPageProps {
  categoryId: string;
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, onBack }) => {
  const category = CATEGORIES.find(c => c.id === categoryId);

  // Default to existing static photos
  const [photos, setPhotos] = useState(PHOTOS[categoryId] || []);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Load concretes photos from static JSON manifest when that category is selected
  useEffect(() => {
    let cancelled = false;

    // Helper: Fisher–Yates shuffle
    const shuffle = <T,>(arr: T[]): T[] => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    // Helper: pick a random item from list
    const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

    if (categoryId === 'concretes') {
      fetch('/data/concretes.json')
        .then((res) => res.json())
        .then((items) => {
          if (cancelled) return;
          const heights = [900, 1000, 1100, 1200, 1300];
          const mapped = shuffle(items).map((item: any, idx: number) => ({
            id: idx + 1,
            src: item.src || item.fullSrc,
            alt: item.alt || 'concretes photo',
            width: 800,
            height: pick(heights),
          }));
          setPhotos(mapped);
        })
        .catch(() => {
          const fallback = (PHOTOS['concretes'] || []).map((p, idx) => ({
            ...p,
            id: idx + 1,
            height: [900, 1000, 1100, 1200, 1300][idx % 5] || 1100,
          }));
          setPhotos(fallback);
        });
    } else if (categoryId === 'natural-aesthetics') {
      fetch('/data/natural-aesthetics.json')
        .then((res) => res.json())
        .then((items) => {
          if (cancelled) return;
          const heights = [900, 1000, 1100, 1200, 1300];
          const mapped = shuffle(items).map((item: any, idx: number) => ({
            id: idx + 1,
            src: item.src || item.fullSrc,
            alt: item.alt || 'natural aesthetics photo',
            width: 800,
            height: pick(heights),
          }));
          setPhotos(mapped);
        })
        .catch(() => {
          const fallback = (PHOTOS['natural-aesthetics'] || []).map((p, idx) => ({
            ...p,
            id: idx + 1,
            height: [900, 1000, 1100, 1200, 1300][idx % 5] || 1100,
          }));
          setPhotos(fallback);
        });
    } else if (categoryId === 'night-and-light') {
      fetch('/data/night-and-light.json')
        .then((res) => res.json())
        .then((items) => {
          if (cancelled) return;
          const heights = [900, 1000, 1100, 1200, 1300];
          const mapped = shuffle(items).map((item: any, idx: number) => ({
            id: idx + 1,
            src: item.src || item.fullSrc,
            alt: item.alt || 'night and light photo',
            width: 800,
            height: pick(heights),
          }));
          setPhotos(mapped);
        })
        .catch(() => {
          const fallback = (PHOTOS['night-and-light'] || []).map((p, idx) => ({
            ...p,
            id: idx + 1,
            height: [900, 1000, 1100, 1200, 1300][idx % 5] || 1100,
          }));
          setPhotos(fallback);
        });
    } else if (categoryId === 'portraits-in-motion') {
      fetch('/data/portraits-in-motion.json')
        .then((res) => res.json())
        .then((items) => {
          if (cancelled) return;
          const heights = [900, 1000, 1100, 1200, 1300];
          const mapped = shuffle(items).map((item: any, idx: number) => ({
            id: idx + 1,
            src: item.src || item.fullSrc,
            alt: item.alt || 'portraits in motion photo',
            width: 800,
            height: pick(heights),
          }));
          setPhotos(mapped);
        })
        .catch(() => {
          const fallback = (PHOTOS['portraits-in-motion'] || []).map((p, idx) => ({
            ...p,
            id: idx + 1,
            height: [900, 1000, 1100, 1200, 1300][idx % 5] || 1100,
          }));
          setPhotos(fallback);
        });
    } else {
      setPhotos(PHOTOS[categoryId] || []);
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
      <div className="w-full min-h-screen p-0 sm:p-0">
        {/* Top hero-like header with logo and category name */}
        <section className="w-full flex flex-col items-center justify-center pt-6 sm:pt-8">
          {/* Inline minimal logo header */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center ml-32">
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

        {/* Controls row under the hero */}
        <header className="px-4 sm:px-8 mt-6 mb-4 flex items-center justify-between">
          <div className="w-24" />
          <div className="w-24" />
        </header>
        <main className="p-4 sm:p-8">
          <MasonryGrid photos={photos} onPhotoClick={openLightbox} />
        </main>
        
        {/* Bottom navigation button */}
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