
import React from 'react';

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="text-sm uppercase tracking-wider">Home</span>
    </button>
  );
};

export default BackButton;
