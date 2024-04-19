import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/api';

export default function Logout() {
  logout();
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, []);

  return <div>Logging out ...</div>;
}
