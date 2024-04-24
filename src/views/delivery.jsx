import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/button';
import View from './view';

export default function Delivery() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order || { pizzas: [] };

  return (
    <View title='Pizza is on the way!'>
      <div className='my-4 flex  justify-center items-center flex-col'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='.25'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='w-64 h-64 text-yellow-500'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z' />
          <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z' />
        </svg>

        <div className='my-4 text-lg text-orange-200 text-left grid grid-cols-5 gap-2'>
          <div className='font-semibold text-orange-400'>order ID:</div> <div className='col-span-4'>{order.id}</div>
          <div className='font-semibold text-orange-400'>pie count:</div> <div className='col-span-4'>{order.pizzas.length}</div>
          <div className='font-semibold text-orange-400'>total:</div> <div className='col-span-4'>${order.pizzas.reduce((a, c) => a + c.price, 0).toLocaleString()}</div>
        </div>

        <div className='flex flex-row mt-8'>
          <Button title='Order more' onPress={() => navigate('/menu')} />
        </div>
      </div>
    </View>
  );
}
