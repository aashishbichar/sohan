
import React, { useState, useEffect } from 'react';
import HomePage from './views/HomePage';
import CategoryPage from './views/CategoryPage';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling when a category page is open on smaller screens
    if (selectedCategory) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedCategory]);

  const handleSelectCategory = (category: string) => {
    setIsFadingOut(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsFadingOut(false);
      window.scrollTo(0, 0);
    }, 500);
  };

  const handleBack = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setSelectedCategory(null);
      setIsFadingOut(false);
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black transition-opacity duration-500 ease-in-out" style={{ opacity: isFadingOut ? 0 : 1 }}>
      {selectedCategory === null ? (
        <HomePage onSelectCategory={handleSelectCategory} />
      ) : (
        <CategoryPage categoryId={selectedCategory} onBack={handleBack} />
      )}
    </div>
  );
};

export default App;
