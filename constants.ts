import { Category, Photo } from './types';

export const CATEGORIES: Category[] = [
  { id: 'natural-aesthetics', name: 'Natural Aesthetics', imageUrl: '/images/thumbnails/natural%20aesthetics%20thumbnail.webp', aspect: 'portrait' },
  { id: 'concretes', name: 'Concretes', imageUrl: '/images/thumbnails/concretes%20thumbnail.webp', aspect: 'video' },
  { id: 'night-and-light', name: 'Night and Light', imageUrl: '/images/thumbnails/night%20and%20light%20thumbnail.webp', aspect: 'square' },
  { id: 'portraits-in-motion', name: 'Portraits in Motion', imageUrl: '/images/thumbnails/potraits%20in%20motion%20thumbnail.webp', aspect: 'portrait' },
  { id: 'the-ordinary-theatre', name: 'The Ordinary Theatre', imageUrl: '/images/thumbnails/ordinary%20theatre%20thumbnail.webp', aspect: 'video' },
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