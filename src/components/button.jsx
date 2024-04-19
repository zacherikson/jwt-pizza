import React from 'react';

export default function Button({ title, onPress, submit }) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className='w-32 m-4 py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-orange-800 text-white hover:bg-orange-600'
      onClick={onPress}
    >
      {title}
    </button>
  );
}
