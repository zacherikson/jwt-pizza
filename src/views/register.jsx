import React, { useEffect } from 'react';
import { KeyIcon, CloseEyeIcon, PersonIcon, EmailIcon } from '../icons';
import Button from '../components/button';
import { Api } from '../api/api';
import { useBreadcrumb } from '../hooks/appNavigation';
import View from './view';

export default function Register({ setUser }) {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const navigateToParentPath = useBreadcrumb();
  const nameRef = React.useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  async function register(event) {
    event.preventDefault();
    try {
      setUser(await Api.register(name, email, password));
      navigateToParentPath();
    } catch (error) {
      displayMessage(JSON.stringify(error));
    }
  }

  function displayMessage(msg) {
    setMessage(msg);
  }

  return (
    <View title='Welcome to the party'>
      <div className='my-4 flex  justify-center items-center flex-col'>
        <div className='h-4 text-yellow-200 font-normal'>{message}</div>

        <form onSubmit={register}>
          <div className='flex  justify-center items-center flex-col mt-8 space-y-4'>
            <div>
              <label htmlFor='email' className='sr-only'>
                Email address
              </label>
              <div className='relative'>
                <input
                  type='name'
                  value={name}
                  ref={nameRef}
                  required
                  onChange={(e) => setName(e.target.value)}
                  id='name'
                  className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                  placeholder='Full name'
                />
                <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
                  <PersonIcon />
                </div>
              </div>
            </div>
            <div className='relative'>
              <input
                type='email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                placeholder='Email address'
              />
              <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
                <EmailIcon />
              </div>
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <div className='relative'>
                <input
                  id='password'
                  type='password'
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className='py-3 ps-11 pe-4 block w-full bg-white/10 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11'
                  placeholder='Password'
                />
                <button type='button' data-hs-toggle-password='{"target": "#password"}' className='absolute top-0 end-0 p-4 rounded-e-md'>
                  <CloseEyeIcon />
                </button>

                <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4'>
                  <KeyIcon />
                </div>
              </div>
            </div>

            <div className='flex flex-row mt-8'>
              <Button title='Register' submit />
            </div>
          </div>
        </form>
      </div>
    </View>
  );
}
