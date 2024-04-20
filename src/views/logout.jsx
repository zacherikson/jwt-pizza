import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/api';
import View from './view';

export default function Logout() {
  logout();
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, []);

  return (
    <View title='Logout'>
      <div>Logging out ...</div>
    </View>
  );
}
