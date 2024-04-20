import React from 'react';
import View from './view';

export default function NotFound() {
  return (
    <View title='Oops'>
      <div className='text-neutral-100'>It looks like we have dropped a pizza on the floor. Please try another page.</div>
    </View>
  );
}
