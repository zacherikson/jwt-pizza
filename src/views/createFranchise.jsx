import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import View from './view';

import Button from '../components/button';

export default function CreateFranchise() {
  const franchise = useLocation().state?.franchise || 'error';
  const navigate = useNavigate();

  function createStore() {
    alert(`Created franchise ${franchise}!`);
    const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
    navigate(locationText);
  }

  function cancel() {
    const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
    navigate(locationText);
  }

  return (
    <View title='Create franchise'>
      <div className='text-neutral-100'>
        Would you create the franchise <span className='font-bold text-yellow-300'>{franchise}</span>?
      </div>
      <Button title='Create' onPress={createStore} />
      <Button title='Cancel' onPress={cancel} />
    </View>
  );
}
