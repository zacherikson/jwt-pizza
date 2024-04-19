import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const location = useLocation();
  const orderCount = location.state.orderCount;
  const navigate = useNavigate();

  function onCancel() {
    navigate('/menu', { state: { orderCount: 0 } });
  }

  function onPay() {
    alert('Payment successful');
  }

  return (
    <>
      <div className='text-neutral-100'>Money money money for {orderCount} pizzas</div>
      <button
        type='button'
        className='w-32 my-4 py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-orange-800 text-white hover:bg-orange-600'
        onClick={onPay}
      >
        Pay now
      </button>
      <button
        type='button'
        className='w-32 my-4 py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-orange-800 text-white hover:bg-orange-600'
        onClick={onCancel}
      >
        Cancel
      </button>
    </>
  );
}
