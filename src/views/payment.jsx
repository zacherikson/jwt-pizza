import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/button';
import { getUser, login } from '../api/api';

export default function Payment() {
  const location = useLocation();
  const orderCount = location.state?.orderCount || 0;
  const navigate = useNavigate();
  const user = getUser();

  React.useEffect(() => {
    if (!user) {
      const loginPath = location.pathname + '/login';
      navigate(loginPath);
    }
  });

  function processPayment() {
    alert(`You just bought ${orderCount} pizzas!`);
    navigate('/menu', { state: { orderCount: 0 } });
  }

  function cancel() {
    navigate('/menu', { state: { orderCount: orderCount } });
  }

  return (
    <>
      <div className='text-neutral-100'>Send me those {orderCount} pizzas right now!</div>
      <Button title='Pay now' onPress={processPayment} />
      <Button title='Cancel' onPress={cancel} />
    </>
  );
}
