import React, { useEffect, useState } from 'react';
import { Api } from '../api/api';
import View from './view';
import Card from '../components/card';
import Button from '../components/button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Menu() {
  const [order, setOrder] = useState(useLocation().state?.order || []);
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const menu = await Api.getPizzaMenu();
      setPizzas(menu);
    })();
  }, []);

  function selectPizza(pizza) {
    setOrder([...order, pizza]);
  }

  function onCheckout() {
    if (order.length > 0) {
      navigate('/payment', { state: { order: order } });
    }
  }

  return (
    <View title='Awesome is on the way'>
      <div className='flow flow-col text-center justify-center text-neutral-100'>
        <div className='my-2 sm:my-8'>Pick your pizza from below. Remember to order extra for a midnight party.</div>

        <div className='text-yellow-200'>{order.length > 0 ? 'Selected pizzas: ' + order.length : 'What are you waiting for? Pick a pizza!'}</div>
        <Button title='Checkout' onPress={onCheckout} disabled={order.length <= 0} className='disabled' />

        <div className='m-4 grid gap-x-8 gap-y-4 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-5'>
          {pizzas.map((pizza) => (
            <button key={pizza.title} type='button' onClick={() => selectPizza(pizza)}>
              <Card title={pizza.title} description={pizza.description} image={pizza.image} />
            </button>
          ))}
        </div>
      </div>
    </View>
  );
}
