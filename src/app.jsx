import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './components/card';
import Carousel from './components/carousel/carousel';
import Quote from './components/quote';
import Slide from './components/slide';

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
                className='flex-none text-4xl font-semibold text-white dark:text-gray-800'
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
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
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
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
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

      <main className='m-8'>
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
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
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
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
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
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
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
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
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
        <div className='container my-4 py-8 rounded-md'>
          <div className='flex flex-col justify-between'>
            <p className='text-5xl font-extrabold text-orange-600 italic'>
              The world's best pizza
            </p>
            <button
              type='button'
              className='w-32 my-4 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none'
              onClick={onClick}
            >
              Buy now ({count})
            </button>
          </div>

          <Carousel
            slides={[
              <Quote
                quote='Most amazing pizza experience of my life.'
                author='Megan Fox, Springville'
              />,
              <Quote quote='Milan reborn!' author='Trina Smith, Provo' />,
              <Quote quote='All I can say is WOW!' author='Don Julio, Orem' />,
              <Quote
                quote='Best pizza ever. I can eat this every day!'
                author='Terrence Jones, Mapleton'
              />,
            ]}
          />

          <div className='m-4 grid gap-x-8 gap-y-4 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-5'>
            <Card
              title='Springville'
              description='The Springville store'
              image='pizza1.png'
            />
            <Card
              title='Orem'
              description='The Orem store'
              image='pizza2.png'
            />
            <Card
              title='Provo'
              description='The provo store'
              image='pizza3.png'
            />
            <Card
              title='Lindon'
              description='The Lindon store'
              image='pizza4.png'
            />
            <Card
              title='Nephi'
              description='The Nephi store'
              image='pizza5.png'
            />
            <Card
              title='American Fork'
              description='The American Fork store'
              image='pizza6.png'
            />
          </div>

          <div className='border-t-2 border-gray-200 dark:border-gray-700'>
            <nav className='-mb-0.5 flex space-x-6 justify-between'>
              <a
                className='hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 active'
                href='#'
                aria-current='page'
              >
                About
              </a>
              <a
                className='hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600'
                href='#'
              >
                Franchise
              </a>
              <a
                className='hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600'
                href='#'
              >
                History
              </a>
            </nav>
            <p className='text-center italic text-gray-500'>
              © 2024 PizzaShop Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
