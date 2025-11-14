import React from 'react';

const Logo: React.FC = () => (
  <div className="flex flex-col items-center">
    {/* Main Logo - Made Bigger */}
    <div className="relative inline-block w-[24rem] h-52 sm:w-[28rem] sm:h-60">
      <svg
        viewBox="0 0 400 200"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 150 C 150 -50, 250 250, 350 50"
          stroke="#A39A8B"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M200,20 Q250,180 380,170"
          stroke="#A39A8B"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M20,20 Q180,200 250,100"
          stroke="#A39A8B"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl sm:text-9xl font-serif tracking-widest text-neutral-100">
          SOHAN
        </h1>
      </div>
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
