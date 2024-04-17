import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Breadcrumb({ location }) {
  return (
    <ol className='flex items-center whitespace-nowrap py-2 px-4 bg-gray-300'>
      <li className='inline-flex items-center'>
        <NavLink
          className='flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500'
          to='/'
        >
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
          Home
        </NavLink>
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
      </li>
      <li
        className='inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200'
        aria-current='page'
      >
        {location}
      </li>
    </ol>
  );
}
