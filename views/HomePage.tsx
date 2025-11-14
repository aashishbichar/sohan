
import React from 'react';
import { CATEGORIES } from '../constants';
import Logo from '../components/Logo';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
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

      {/* Category grid section - 3 equal cards top row, 2 equal larger cards bottom row */}
      <section className="w-full max-w-7xl mx-auto p-4 sm:p-8 pb-12 sm:pb-16">
        <div className="space-y-6 sm:space-y-8">
          {/* Row 1 - 3 equal square cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cats.concretes && (
              <CategoryCard
                category={cats.concretes}
                onClick={() => onSelectCategory(cats.concretes!.id)}
                className="!aspect-square"
              />
            )}

            {cats.naturalAesthetics && (
              <CategoryCard
                category={cats.naturalAesthetics}
                onClick={() => onSelectCategory(cats.naturalAesthetics!.id)}
                className="!aspect-square"
              />
            )}
            
            {cats.nightAndLight && (
              <CategoryCard
                category={cats.nightAndLight}
                onClick={() => onSelectCategory(cats.nightAndLight!.id)}
                className="!aspect-square"
              />
            )}
          </div>

          {/* Row 2 - 2 equal larger square cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {cats.portraitsInMotion && (
              <CategoryCard
                category={cats.portraitsInMotion}
                onClick={() => onSelectCategory(cats.portraitsInMotion!.id)}
                className="!aspect-square"
              />
            )}

            {cats.theOrdinaryTheatre && (
              <CategoryCard
                category={cats.theOrdinaryTheatre}
                onClick={() => onSelectCategory(cats.theOrdinaryTheatre!.id)}
                className="!aspect-square"
              />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
