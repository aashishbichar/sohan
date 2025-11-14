import { Category, Photo } from './types';

export const CATEGORIES: Category[] = [
  { id: 'natural-aesthetics', name: 'Natural Aesthetics', imageUrl: 'https://i.ibb.co/6yV32cZ/sunset-photo.jpg', aspect: 'portrait' },
  { id: 'concretes', name: 'Concretes', imageUrl: 'https://picsum.photos/seed/concretes/1200/800', aspect: 'video' },
  { id: 'night-and-light', name: 'Night and Light', imageUrl: 'https://picsum.photos/seed/night-and-light/800/800', aspect: 'square' },
  { id: 'portraits-in-motion', name: 'Portraits in Motion', imageUrl: 'https://picsum.photos/seed/portraits-in-motion/800/1000', aspect: 'portrait' },
  { id: 'the-ordinary-theatre', name: 'The Ordinary Theatre', imageUrl: 'https://picsum.photos/seed/the-ordinary-theatre/1200/800', aspect: 'video' },
];

const generatePhotos = (category: string, count: number): Photo[] => {
  return Array.from({ length: count }, (_, i) => {
    const height = Math.floor(Math.random() * 600) + 400;
    const width = 800;
    return {
      id: i + 1,
      src: `https://picsum.photos/seed/${category}${i}/${width}/${height}`,
      alt: `${category} photo ${i + 1}`,
      width,
      height,
    };
  });
};

export const PHOTOS: Record<string, Photo[]> = {
  'natural-aesthetics': generatePhotos('natural-aesthetics', 15),
  'concretes': generatePhotos('concretes', 18),
  'night-and-light': generatePhotos('night-and-light', 16),
  'portraits-in-motion': generatePhotos('portraits-in-motion', 20),
  'the-ordinary-theatre': generatePhotos('the-ordinary-theatre', 14),
};