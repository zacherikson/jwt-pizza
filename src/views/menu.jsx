import React from 'react';
import { useState } from 'react';
import Card from '../components/card';
import Button from '../components/button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Menu() {
  const [count, setCount] = useState(useLocation().state?.orderCount || 0);
  const [orderMessage, setOrderMessage] = useState('');
  const navigate = useNavigate();

  function onClick() {
    setCount(count + 1);
  }

  function onCheckout() {
    if (count === 0) {
      setOrderMessage('Please select a pizza first. How about a Margarita?');
    } else if (count > 0) {
      setOrderMessage(`Order placed for ${count} pizzas!`);
      setCount(0);
      navigate('/payment', { state: { orderCount: count } });
    }
  }

  const pizzas = [
    { title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png' },
    { title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png' },
    { title: 'Margarita', description: 'Essential classic', image: 'pizza3.png' },
    { title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png' },
    { title: 'Flat', description: 'Something special', image: 'pizza5.png' },
    { title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png' },
  ];
  return (
    <div className='flow flow-col justify-center text-neutral-100'>
      <div className='my-2 sm:my-8 sm:text-yellow-200'>Pizza, pizza, pizza, pizza, pizza, pizza, pizza, pizza, pizza, and more PIZZA!</div>

      <div> Selected pizzas: {count}</div>
      <Button title='Checkout' onPress={onCheckout} />
      <div className='h-8'>{orderMessage}</div>

      <div className='m-4 grid gap-x-8 gap-y-4 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-5'>
        {pizzas.map((pizza) => (
          <button key={pizza.title} type='button' onClick={onClick}>
            <Card title={pizza.title} description={pizza.description} image={pizza.image} />
          </button>
        ))}
      </div>
    </div>
  );
}
