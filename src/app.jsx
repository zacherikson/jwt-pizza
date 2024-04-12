import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  function onClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <img alt='pizza' src='/pizza-shop-logo.png' />
      <p className='m-4'>The world's best pizza</p>
      <button
        className='m-4 bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded border-black'
        onClick={onClick}
      >
        Order ({count})
      </button>
    </div>
  );
}
