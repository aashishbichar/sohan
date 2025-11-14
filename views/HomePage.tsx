
import React from 'react';
import { CATEGORIES } from '../constants';
import Logo from '../components/Logo';
import CategoryCard from '../components/CategoryCard';
import type { Category } from '../types';

interface HomePageProps {
  onSelectCategory: (categoryId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCategory }) => {
  // Manually find each category to create the specific layout.
  const cats = {
    naturalAesthetics: CATEGORIES.find(c => c.id === 'natural-aesthetics'),
    concretes: CATEGORIES.find(c => c.id === 'concretes'),
    nightAndLight: CATEGORIES.find(c => c.id === 'night-and-light'),
    portraitsInMotion: CATEGORIES.find(c => c.id === 'portraits-in-motion'),
    theOrdinaryTheatre: CATEGORIES.find(c => c.id === 'the-ordinary-theatre'),
  };

  return (
    <main className="w-full">
      {/* Hero section for the logo, taking up ~75vh */}
      <section className="min-h-[75vh] w-full flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="text-center">
          <Logo />
        </div>
      </section>

      {/* Category grid section - New "1 big, 4 small" layout */}
      <section className="w-full max-w-7xl mx-auto p-4 sm:p-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr_1fr] lg:grid-cols-[1fr_1.5fr_1fr] md:grid-rows-2 gap-6 sm:gap-8">
          
          {/* Central Card (Big) */}
          {cats.naturalAesthetics && (
            <CategoryCard
              category={cats.naturalAesthetics}
              onClick={() => onSelectCategory(cats.naturalAesthetics!.id)}
              className="md:col-start-2 md:row-start-1 md:row-span-2 !aspect-auto h-full"
            />
          )}
          
          {/* Top-Left Card */}
          {cats.concretes && (
            <CategoryCard
              category={cats.concretes}
              onClick={() => onSelectCategory(cats.concretes!.id)}
              className="md:col-start-1 md:row-start-1"
            />
          )}

          {/* Top-Right Card */}
          {cats.nightAndLight && (
            <CategoryCard
              category={cats.nightAndLight}
              onClick={() => onSelectCategory(cats.nightAndLight!.id)}
              className="md:col-start-3 md:row-start-1"
            />
          )}

          {/* Bottom-Left Card */}
          {cats.portraitsInMotion && (
            <CategoryCard
              category={cats.portraitsInMotion}
              onClick={() => onSelectCategory(cats.portraitsInMotion!.id)}
              className="md:col-start-1 md:row-start-2"
            />
          )}

          {/* Bottom-Right Card */}
          {cats.theOrdinaryTheatre && (
            <CategoryCard
              category={cats.theOrdinaryTheatre}
              onClick={() => onSelectCategory(cats.theOrdinaryTheatre!.id)}
              className="md:col-start-3 md:row-start-2"
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
