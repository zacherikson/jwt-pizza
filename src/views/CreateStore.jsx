import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import View from './view';

import Button from '../components/button';

export default function CreateStore() {
  const store = useLocation().state?.store || 'all';
  const navigate = useNavigate();

  function createStore() {
    alert(`Created store ${store}!`);
    const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
    navigate(locationText);
  }

  function cancel() {
    const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
    navigate(locationText);
  }

  return (
    <View title='Create store'>
      <div className='text-neutral-100'>
        Would you create the store <span className='font-bold text-yellow-300'>{store}</span>?
      </div>
      <Button title='Create' onPress={createStore} />
      <Button title='Cancel' onPress={cancel} />
    </View>
  );
}
