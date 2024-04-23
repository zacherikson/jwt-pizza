import React from 'react';
import { Link } from 'react-router-dom';
import View from './view';
import NotFound from './notFound';
import Api from '../api/api';

export default function DinnerDashboard({ user }) {
  const [purchases, setPurchases] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setPurchases(await Api.getPurchases(user));
    })();
  }, [user]);

  if (!user) {
    return <NotFound />;
  }

  return (
    <View title='Your pizza kitchen'>
      <div className='my-4'>
        <div className='my-4 text-sm text-orange-200 text-left'>
          <div>email: {user.email}</div>
          <div>role: {user.roles.join(',')}</div>
        </div>

        {purchases?.length === 0 && (
          <div className='text-neutral-100'>
            How have you lived this long without having a pizza?{' '}
            <Link className='text-orange-400 underline font-semibold' to='/menu'>
              {' '}
              Buy one{' '}
            </Link>{' '}
            now!
          </div>
        )}
        {purchases?.length > 0 && (
          <>
            <div className='text-neutral-100'>Here is your history of all the good times.</div>
            <div className='bg-neutral-100 overflow-clip my-4'>
              <div className='flex flex-col'>
                <div className='-m-1.5 overflow-x-auto'>
                  <div className='p-1.5 min-w-full inline-block align-middle'>
                    <div className='overflow-hidden'>
                      <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                        <thead>
                          <tr>
                            <th scope='col' className='px-6 py-3 text-start text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-neutral-500'>
                              Pie
                            </th>
                            <th scope='col' className='px-6 py-3 text-start text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-neutral-500'>
                              Price
                            </th>
                            <th scope='col' className='px-6 py-3 text-start text-xs sm:text-sm font-medium text-gray-500 uppercase dark:text-neutral-500'>
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                          {purchases.map((purchase, index) => (
                            <tr key={index} className='hover:bg-gray-100 dark:hover:bg-neutral-700'>
                              <td className='px-6 py-4 whitespace-nowrap text-start text-xs sm:text-sm font-medium text-gray-800 dark:text-neutral-200'>{purchase.name}</td>
                              <td className='px-6 py-4 whitespace-nowrap text-start text-xs sm:text-sm text-gray-800 dark:text-neutral-200'>${purchase.price.toLocaleString()}</td>
                              <td className='px-6 py-4 whitespace-nowrap text-start text-xs sm:text-sm text-gray-800 dark:text-neutral-200'>{purchase.date.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </View>
  );
}
