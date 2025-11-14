
import React from 'react';
import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, className = '' }) => {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  const cardAspectRatio = category.aspect ? aspectClasses[category.aspect] : 'aspect-video';

  return (
    <div
      onClick={onClick}
      className={`relative ${cardAspectRatio} rounded-lg overflow-hidden cursor-pointer group ${className}`}
      style={{
        backgroundImage: `url(${category.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center">
        <h2 className="text-2xl font-serif text-white tracking-wider transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
          {category.name}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
