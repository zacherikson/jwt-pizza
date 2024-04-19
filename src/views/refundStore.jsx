import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/button';

export default function RefundStore() {
  const store = useLocation().state?.store || 'all';
  const navigate = useNavigate();

  function refund() {
    alert(`Refunded money to ${store}!`);
    navigate('/admin-dashboard');
  }

  function cancel() {
    navigate('/admin-dashboard');
  }

  return (
    <>
      <div className='text-neutral-100'>
        Would you like to refund the <span className='font-bold text-yellow-300'>{store}</span> store all of its money?
      </div>
      <Button title='Refund' onPress={refund} />
      <Button title='Cancel' onPress={cancel} />
    </>
  );
}
