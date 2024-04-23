import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Api from '../api/api';
import View from './view';
import Button from '../components/button';

export default function CloseStore() {
  const state = useLocation().state;
  const navigate = useNavigate();

  function close() {
    Api.closeStore(state.franchise, state.store);
    cancel();
  }

  function cancel() {
    const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
    navigate(locationText);
  }

  return (
    <View title='Sorry to see you go'>
      <div className='text-left py-8 px-4 sm:px-6 lg:px-8'>
        <div className='text-neutral-100'>
          Are you sure you want to close the {state.franchise.name} store in {state.store.city}? This cannot be restored. All outstanding revenue with not be refunded.
        </div>
        <Button title='Close' onPress={close} />
        <Button title='Cancel' onPress={cancel} />
      </div>
    </View>
  );
}
