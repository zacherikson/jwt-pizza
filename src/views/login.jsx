import React from 'react';
import { PersonIcon, EmailIcon } from '../icons';
import Button from '../components/button';

export default function Login() {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function login() {
    console.log('login', email, password);
  }
  return (
    <>
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
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='hs-cover-with-gradient-form-name-1'
              className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11'
              placeholder='Password'
            />
            <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
              <PersonIcon />
            </div>
          </div>
        </div>

        <Button title='Login' onPress={login} />
      </div>
    </>
  );
}
