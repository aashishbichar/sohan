
export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  aspect?: 'video' | 'square' | 'portrait';
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}