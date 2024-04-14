import React from 'react';

export default function Slide({ image }) {
  return (
    <div className='hs-carousel-slide'>
      <div className='flex justify-center h-full bg-transparent p-6'>
        <span className='self-center text-4xl transition duration-700'>
          <img className='rounded-xl' src={image} />
        </span>
      </div>
    </div>
  );
}
