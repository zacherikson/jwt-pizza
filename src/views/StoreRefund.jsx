import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function StoreRefund() {
  const location = useLocation();
  const store = location.state?.store || 'all';
  const navigate = useNavigate();

  function createStore() {
    navigate('/menu', { state: { orderCount: 0 } });
  }

  return (
    <>
      <div className='text-neutral-100'>
        Would you like to refund the <span className='font-bold text-yellow-300'>{store}</span> store all of its money?
      </div>
      <button
        type='button'
        className='w-32 my-4 py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-orange-800 text-white hover:bg-orange-600'
        onClick={createStore}
      >
        Refund
      </button>
    </>
  );
}
