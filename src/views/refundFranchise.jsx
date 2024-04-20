import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import View from './view';
import Button from '../components/button';

export default function RefundFrancise() {
  const franchise = useLocation().state?.franchise || 'all';
  const refundAmount = (useLocation().state?.refundAmount || 0).toLocaleString();
  const navigate = useNavigate();

  function refund() {
    alert(`Refunded $${refundAmount} to ${franchise}!`);
    navigate('/admin-dashboard');
  }

  function cancel() {
    navigate('/admin-dashboard');
  }

  return (
    <View title='Give a little back'>
      <div className='text-neutral-100'>
        Are you sure you want to refund ${refundAmount} to the <span className='font-bold text-yellow-300'>{franchise}</span> franchise?
      </div>
      <Button title='Refund' onPress={refund} />
      <Button title='Cancel' onPress={cancel} />
    </View>
  );
}
