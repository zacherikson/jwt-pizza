import React from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../api/api';
import View from './view';

export default function Logout({ setUser }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      await Api.logout();
      setUser(null);
      navigate('/');
    })();
  }, []);

  return (
    <View title='Logout'>
      <div className='text-neutral-100'>Logging out ...</div>
    </View>
  );
}
