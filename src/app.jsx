import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'preline/preline';

export default function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  function onClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <div className='space-y-4'>
        <header className='flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-800 text-sm py-4 dark:bg-white'>
          <nav
            className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
            aria-label='Global'
          >
            <div className='flex items-center justify-between'>
              <img className='w-10 m-3' src='/pizza-shop-icon.png' />
              <a
                className='flex-none text-xl font-semibold text-white dark:text-gray-800'
                href='#'
              >
                PizzaShop
              </a>
              <div className='sm:hidden'>
                <button
                  type='button'
                  className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
                  data-hs-collapse='#navbar-dark'
                  aria-controls='navbar-dark'
                  aria-label='Toggle navigation'
                >
                  <svg
                    className='hs-collapse-open:hidden flex-shrink-0 size-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <line x1='3' x2='21' y1='6' y2='6' />
                    <line x1='3' x2='21' y1='12' y2='12' />
                    <line x1='3' x2='21' y1='18' y2='18' />
                  </svg>
                  <svg
                    className='hs-collapse-open:block hidden flex-shrink-0 size-4'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M18 6 6 18' />
                    <path d='m6 6 12 12' />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id='navbar-dark'
              className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
            >
              <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5'>
                <a
                  className='font-medium text-white'
                  href='#'
                  aria-current='page'
                >
                  Landing
                </a>
                <a
                  className='font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                  href='#'
                >
                  Account
                </a>
                <a
                  className='font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                  href='#'
                >
                  Work
                </a>
                <a
                  className='font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                  href='#'
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <main>
        <ol className='flex items-center whitespace-nowrap'>
          <li className='inline-flex items-center'>
            <a
              className='flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500'
              href='#'
            >
              <svg
                className='flex-shrink-0 me-3 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
                <polyline points='9 22 9 12 15 12 15 22'></polyline>
              </svg>
              Home
            </a>
            <svg
              className='flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='m9 18 6-6-6-6'></path>
            </svg>
          </li>
          <li className='inline-flex items-center'>
            <a
              className='flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500'
              href='#'
            >
              <svg
                className='flex-shrink-0 me-3 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <rect width='7' height='7' x='14' y='3' rx='1'></rect>
                <path d='M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3'></path>
              </svg>
              App Center
              <svg
                className='flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='m9 18 6-6-6-6'></path>
              </svg>
            </a>
          </li>
          <li
            className='inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200'
            aria-current='page'
          >
            Application
          </li>
        </ol>
        <div className='container mx-auto m-4 p-4 bg-slate-300'>
          <p>The world's best pizza</p>

          <div
            data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
            className='relative'
          >
            <div className='hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg'>
              <div className='hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0'>
                <div className='hs-carousel-slide'>
                  <div className='flex justify-center h-full bg-gray-100 p-6'>
                    <span className='self-center text-4xl transition duration-700'>
                      First slide
                    </span>
                  </div>
                </div>
                <div className='hs-carousel-slide'>
                  <div className='flex justify-center h-full bg-gray-200 p-6'>
                    <span className='self-center text-4xl transition duration-700'>
                      Second slide
                    </span>
                  </div>
                </div>
                <div className='hs-carousel-slide'>
                  <div className='flex justify-center h-full bg-gray-300 p-6'>
                    <span className='self-center text-4xl transition duration-700'>
                      Third slide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type='button'
              className='hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]'
            >
              <span className='text-2xl' aria-hidden='true'>
                <svg
                  className='flex-shrink-0 size-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
                  ></path>
                </svg>
              </span>
              <span className='sr-only'>Previous</span>
            </button>
            <button
              type='button'
              className='hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]'
            >
              <span className='sr-only'>Next</span>
              <span className='text-2xl' aria-hidden='true'>
                <svg
                  className='flex-shrink-0 size-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                  ></path>
                </svg>
              </span>
            </button>

            <div className='hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2'>
              <span className='hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer'></span>
              <span className='hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer'></span>
              <span className='hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer'></span>
            </div>
          </div>

          <blockquote className='relative m-10'>
            <svg
              className='absolute -top-6 -start-8 size-16 text-gray-100 dark:text-gray-700'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                d='M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z'
                fill='currentColor'
              ></path>
            </svg>

            <div className='relative z-10'>
              <p className='text-gray-800 dark:text-white'>
                <em>
                  Most amazing pizza experience of my life. Italy reborn! - Don
                  Julio
                </em>
              </p>
            </div>
          </blockquote>

          <button
            type='button'
            className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
            onClick={onClick}
          >
            Buy now ({count})
          </button>
        </div>
      </main>
    </div>
  );
}
