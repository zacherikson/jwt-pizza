import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreIcon } from '../icons';
import Api from '../api/api';
import View from './view';

import Button from '../components/button';

export default function CreateFranchise() {
  const navigate = useNavigate();
  const [franchise, setFranchise] = React.useState({});

  async function createFranchise() {
    await Api.createFranchise(franchise);
    returnToParent();
  }

  function returnToParent() {
    const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
    navigate(locationText);
  }

  return (
    <View title='Create franchise'>
      <div className='text-neutral-100'>Want to create franchise?</div>
      <div className='max-w-sm space-y-3 py-4  flex-1'>
        <div className='relative'>
          <input
            type='text'
            onChange={(e) => setFranchise({ ...franchise, name: e.target.value })}
            className='peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='franchise name'
          />
          <div className='absolute   text-orange-800 inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none'>
            <StoreIcon />
          </div>
        </div>
        <div className='relative'>
          <input
            type='text'
            onChange={(e) => setFranchise({ ...franchise, franchisee: e.target.value })}
            className='peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='franchisee email'
          />
          <div className='absolute   text-orange-800 inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none'>
            <StoreIcon />
          </div>
        </div>
      </div>

      <Button title='Create' onPress={createFranchise} />
      <Button title='Cancel' onPress={returnToParent} />
    </View>
  );
}
