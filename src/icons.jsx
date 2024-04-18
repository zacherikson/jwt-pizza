import React from 'react';

function HouseIcon() {
  return (
    <svg
      className='flex-shrink-0 me-3 size-4'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
      <polyline points='9 22 9 12 15 12 15 22'></polyline>
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      className='hs-collapse-open:hidden flex-shrink-0 size-4'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='3' x2='21' y1='6' y2='6' />
      <line x1='3' x2='21' y1='12' y2='12' />
      <line x1='3' x2='21' y1='18' y2='18' />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className='hs-collapse-open:block hidden flex-shrink-0 size-4'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}

function GreaterThanIcon() {
  return (
    <svg
      className='flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m9 18 6-6-6-6'></path>
    </svg>
  );
}

export { CloseIcon, HouseIcon, HamburgerIcon, GreaterThanIcon };
