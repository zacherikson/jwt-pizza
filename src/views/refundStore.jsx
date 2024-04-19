import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/button';

export default function RefundStore() {
  const store = useLocation().state?.store || 'all';
  const refundAmount = useLocation().state?.refundAmount || 0;
  const navigate = useNavigate();

  function refund() {
    alert(`Refunded $${refundAmount.toLocaleString()} to ${store}!`);
    navigate('/admin-dashboard');
  }

  function cancel() {
    navigate('/admin-dashboard');
  }

  return (
    <>
      <div className='text-neutral-100'>
        Are you sure you want to refund ${refundAmount.toLocaleString()} to the <span className='font-bold text-yellow-300'>{store}</span> store?
      </div>
      <Button title='Refund' onPress={refund} />
      <Button title='Cancel' onPress={cancel} />
    </>
  );
}
