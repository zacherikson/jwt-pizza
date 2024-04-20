import React from 'react';

function CautionIcon() {
  return (
    <svg
      className='flex-shrink-0 size-4 mt-0.5'
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
      <path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'></path>
      <path d='M12 9v4'></path>
      <path d='M12 17h.01'></path>
    </svg>
  );
}

function CloseEyeIcon() {
  return (
    <svg
      className='flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path className='hs-password-active:hidden' d='M9.88 9.88a3 3 0 1 0 4.24 4.24'></path>
      <path className='hs-password-active:hidden' d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'></path>
      <path className='hs-password-active:hidden' d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'></path>
      <line className='hs-password-active:hidden' x1='2' x2='22' y1='2' y2='22'></line>
      <path className='hidden hs-password-active:block' d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'></path>
      <circle className='hidden hs-password-active:block' cx='12' cy='12' r='3'></circle>
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg
      className='flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500'
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
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className='flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500'
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
      <rect width='20' height='16' x='2' y='4' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  );
}

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

function StoreIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z'
      />
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

export { CautionIcon, CloseEyeIcon, PersonIcon, EmailIcon, StoreIcon, CloseIcon, HouseIcon, HamburgerIcon, GreaterThanIcon };
