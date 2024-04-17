import React from 'react';

export default function About() {
  return (
    <>
      <div className='bg-slate-600 flex flex-col justify-center sm:items-center mx-auto size-full'>
        <div className='text-center py-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col justify-between'>
            <h2 className='mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl'>
              <span className='bg-clip-text bg-gradient-to-tr from-orange-600 to-orange-400  text-transparent'>
                The secret sauce
              </span>
            </h2>
            <div>
              <img src='/pizza-shop-logo.png' className='w-64 m-4 float-left' />
              <p className='py-2 text-white'>
                Lorem ipsum dolor amet pug etsy shoreditch, cliche banjo mixtape woke. Tote bag 8-bit banh mi, irony man
                bun Rob Pike. Tumeric pabst 3 wolf moon, banjo tattooed pug. VHS banh mi shoreditch, irony pug venmo.
                Tote bag skateboard banjo, chambray pug banh mi. Tumeric banjo pug, etsy shoreditch Margaret Hamilton.
                Mixtape banh mi farm-to-table, irony pug Håkon Wium Lie.
              </p>
              <p className='py-2 text-white'>
                Artisan occupy pug, banjo etsy woke. Tumeric banh mi pug, irony venmo Matt Holt. VHS banjo 8-bit,
                chambray Brendan Eich venmo. Tote bag skateboard banh mi, irony pug venmo. Tumeric banjo pug, etsy
                shoreditch Uncle Bob. Mixtape banh mi farm-to-table, irony pug Evan You. Artisan occupy pug, banjo etsy
                woke. Tumeric banh mi pug, irony venmo Linus Torvalds.
              </p>
              <p className='py-2 text-white'>
                Pug banjo 8-bit, chambray Ryan Dahl venmo. Tote bag skateboard banh mi, irony pug venmo. Tumeric banjo
                pug, etsy shoreditch TJ Holowaychuk. Mixtape banh mi farm-to-table, irony pug Jordan Walke. Artisan
                occupy pug, banjo etsy woke. Tumeric banh mi pug, irony venmo Alan Ashton. VHS banjo 8-bit, chambray Tim
                Berners-Lee venmo.
              </p>
              <p className='py-2 text-white'>
                Tote bag skateboard banh mi, irony pug venmo. Tumeric banjo pug, etsy shoreditch. Mixtape banh mi
                farm-to-table, irony pug. Artisan occupy pug, banjo etsy woke. Tumeric banh mi pug, irony venmo. VHS
                banjo 8-bit, chambray venmo. Pug banjo 8-bit, chambray venmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
