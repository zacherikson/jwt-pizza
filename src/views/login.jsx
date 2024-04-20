import React from 'react';
import { CloseEyeIcon, PersonIcon, EmailIcon } from '../icons';
import Button from '../components/button';
import { login } from '../api/api';
import { useLocation, useNavigate } from 'react-router-dom';
import View from './view';

export default function Login() {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const location = useLocation();
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    if (login(email, password)) {
      const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
      navigate(locationText);
    }
  }

  return (
    <View title='Login'>
      <form onSubmit={submit}>
        <div className='mt-8 space-y-4'>
          <div>
            <label htmlFor='hs-cover-with-gradient-form-email-1' className='sr-only'>
              Email address
            </label>
            <div className='relative'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='hs-cover-with-gradient-form-email-1'
                className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                placeholder='Email address'
              />
              <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
                <EmailIcon />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='hs-cover-with-gradient-form-name-1' className='sr-only'>
              Password
            </label>
            <div className='relative'>
              <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                placeholder='Password'
              />
              <button type='button' data-hs-toggle-password='{"target": "#password"}' className='absolute top-0 end-0 p-4 rounded-e-md'>
                <CloseEyeIcon />
              </button>

              <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
                <PersonIcon />
              </div>
            </div>
          </div>

          <Button title='Login' submit />
        </div>
      </form>
    </View>
  );
}
