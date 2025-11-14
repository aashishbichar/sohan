import { Category, Photo } from './types';

export const CATEGORIES: Category[] = [
  { id: 'natural-aesthetics', name: 'Natural Aesthetics', imageUrl: '/images/thumbnails/natural%20aesthetics%20thumbnail.webp', aspect: 'portrait' },
  { id: 'concretes', name: 'Concretes', imageUrl: '/images/thumbnails/concretes%20thumbnail.webp', aspect: 'video' },
  { id: 'night-and-light', name: 'Night and Light', imageUrl: '/images/thumbnails/night%20and%20light%20thumbnail.webp', aspect: 'square' },
  { id: 'portraits-in-motion', name: 'Portraits in Motion', imageUrl: '/images/thumbnails/potraits%20in%20motion%20thumbnail.webp', aspect: 'portrait' },
  { id: 'the-ordinary-theatre', name: 'The Ordinary Theatre', imageUrl: '/images/thumbnails/ordinary%20theatre%20thumbnail.webp', aspect: 'video' },
];

async function fetchPhotos(category: string): Promise<Photo[]> {
  const response = await fetch(`/data/${category}.json`);
  const data = await response.json();
  return data;
}


export const PHOTOS: Record<string, () => Promise<Photo[]>> = {
  'natural-aesthetics': () => fetchPhotos('natural-aesthetics'),
  'concretes': () => fetchPhotos('concretes'),
  'night-and-light': () => fetchPhotos('night-and-light'),
  'portraits-in-motion': () => fetchPhotos('portraits-in-motion'),
  'the-ordinary-theatre': () => fetchPhotos('the-ordinary-theatre'),
};
