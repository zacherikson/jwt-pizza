import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import View from './view';
import Button from '../components/button';
import { Api } from '../api/api';

export default function Payment() {
  const location = useLocation();
  const order = location.state?.order || [];
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const user = await Api.getUser();
      if (!user) {
        const loginPath = location.pathname + '/login';
        navigate(loginPath, { state: location.state });
      }
    })();
  }, []);

  async function processPayment() {
    const confirmation = await Api.purchase(order);
    alert(`You just bought ${confirmation.length} pizzas!`);
    navigate('/dinner-dashboard', { state: { order: [] } });
  }

  function cancel() {
    navigate('/menu', { state: { order: order } });
  }

  return (
    <View title='So worth it'>
      <div className='text-neutral-100'>Send me those {order.length} pizzas right now!</div>
      <Button title='Pay now' onPress={processPayment} />
      <Button title='Cancel' onPress={cancel} />
      <div className='bg-neutral-100 overflow-clip my-4'>
        <div className='flex flex-col'>
          <div className='-m-1.5 overflow-x-auto'>
            <div className='p-1.5 min-w-full inline-block align-middle'>
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                  <thead className='text-neutral-100 bg-slate-400 border-b-2 border-gray-500'>
                    <tr>
                      <th scope='col' className='px-6 py-3 text-start text-xs sm:text-sm font-medium'>
                        Pie
                      </th>
                      <th scope='col' className='px-6 py-3 text-start text-xs sm:text-sm font-medium'>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                    {order.map((pizza, index) => (
                      <tr key={index} className='hover:bg-gray-100 dark:hover:bg-neutral-700'>
                        <td className='px-6 py-4 whitespace-nowrap text-start text-xs sm:text-sm font-medium text-gray-800 dark:text-neutral-200'>{pizza.title}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-start text-xs sm:text-sm text-gray-800 dark:text-neutral-200'>${pizza.price.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className='bg-orange-200 border-t-2 border-red-500'>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>
                        {order.length} pie{order.length > 1 ? 's' : ''}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>${order.reduce((a, c) => a + c.price, 0).toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
