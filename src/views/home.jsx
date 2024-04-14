import React from 'react';
import { useState } from 'react';
import Card from '../components/card';
import Carousel from '../components/carousel/carousel';
import Quote from '../components/quote';

export default function Home() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }
  return (
    <>
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
            className='w-32 my-4 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500'
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
          <Card title='Orem' description='The Orem store' image='pizza2.png' />
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
      </div>
    </>
  );
}
