import React from 'react';

export default function Main({ title, children }) {
  return (
    <>
      <div className='bg-slate-600 flex flex-col justify-center sm:items-center mx-auto size-full'>
        <div className='text-center py-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col justify-between'>
            <h2 className='mt-1 sm:mt-3 text-6xl font-thin text-white sm:text-6xl'>
              <span className='bg-clip-text bg-gradient-to-tr from-orange-600 to-orange-400 text-transparent'>
                {title}
              </span>
            </h2>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
