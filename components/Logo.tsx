import React from 'react';

const Logo: React.FC = () => (
  <div className="flex flex-col items-center justify-center">
    {/* Main Logo - Image */}
    <div className="flex justify-center ml-32">
      <img
        src="/images/Sohan.png"
        alt="Sohan"
        className="w-[24rem] h-auto sm:w-[28rem] object-contain"
      />
    </div>

    {/* Added Text Block */}
    <div className="text-center font-serif mt-6">
      <p className="text-lg sm:text-xl text-[#A39A8B]">
        for creators like me,
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-neutral-100 my-1 tracking-wide">
        ideas take shape.
      </h2>
      <p className="text-lg sm:text-xl">
        <span className="text-neutral-100">frame by frame. </span>
        <span className="text-[#A39A8B]">thought by thought.</span>
      </p>
    </div>

    {/* Animated Arrow */}
    <div className="mt-16 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-neutral-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

export default Logo;
