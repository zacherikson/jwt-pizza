import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateStore() {
  const navigate = useNavigate;
  function createStore() {
    navigate('/admin-dashboard');
  }
  return (
    <div>
      <div className='text-neutral-100'>You are on Create Store</div>
      <button
        type='button'
        className='w-32 my-4 py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-orange-800 text-white hover:bg-orange-600'
        onClick={createStore}
      >
        Checkout
      </button>
    </div>
  );
}
