import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';

export default function AdminDashboard() {
  const navigate = useNavigate();

  function createStore() {
    navigate('/admin-dashboard/create-store', { state: { store: 'Orem' } });
  }

  function refundStore() {
    navigate('/admin-dashboard/refund-store', { state: { store: 'Orem' } });
  }

  return (
    <div>
      <div className='text-neutral-100'>You are the admin dashboard</div>
      <Button title='Create store' onPress={createStore} />
      <Button title='Refund store' onPress={refundStore} />
    </div>
  );
}
