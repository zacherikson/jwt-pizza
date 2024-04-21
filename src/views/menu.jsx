import React, { useEffect, useState } from 'react';
import Api from '../api/api';
import View from './view';
import Card from '../components/card';
import Button from '../components/button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Menu() {
  const [count, setCount] = useState(useLocation().state?.orderCount || 0);
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await Api.getPizzas();
      setPizzas(response);
    })();
  }, []);

  function onClick() {
    setCount(count + 1);
  }

  function onCheckout() {
    if (count > 0) {
      navigate('/payment', { state: { orderCount: count } });
    }
  }

  return (
    <View title='Awesome is on the way'>
      <div className='flow flow-col justify-center text-neutral-100'>
        <div className='my-2 sm:my-8'>Pick your pizza from below. Remember to order extra for a midnight party.</div>

        <div className='text-yellow-200'>{count > 0 ? 'Selected pizzas: ' + count : 'What are you waiting for? Pick a pizza!'}</div>
        <Button title='Checkout' onPress={onCheckout} disabled={count <= 0} className='disabled' />

        <div className='m-4 grid gap-x-8 gap-y-4 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-5'>
          {pizzas.map((pizza) => (
            <button key={pizza.title} type='button' onClick={onClick}>
              <Card title={pizza.title} description={pizza.description} image={pizza.image} />
            </button>
          ))}
        </div>
      </div>
    </View>
  );
}
