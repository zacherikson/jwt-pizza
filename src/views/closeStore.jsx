import React from 'react';
import { useLocation } from 'react-router-dom';
import { useBreadcrumb } from '../hooks/appNavigation';
import { Api } from '../api/api';
import View from './view';
import Button from '../components/button';

export default function CloseStore() {
  const state = useLocation().state;
  const navigateToParent = useBreadcrumb();

  function close() {
    Api.closeStore(state.franchise, state.store);
    navigateToParent();
  }

  return (
    <View title='Sorry to see you go'>
      <div className='text-start py-8 px-4 sm:px-6 lg:px-8'>
        <div className='text-neutral-100'>
          Are you sure you want to close the {state.franchise.name} store in <span className='text-orange-500'>{state.store.location}</span>? This cannot be restored. All outstanding revenue with not
          be refunded.
        </div>
        <Button title='Close' onPress={close} />
        <Button title='Cancel' onPress={navigateToParent} className='bg-transparent border-neutral-300' />
      </div>
    </View>
  );
}
