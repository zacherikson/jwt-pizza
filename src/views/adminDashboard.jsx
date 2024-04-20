import React from 'react';
import View from './view';
import { useNavigate } from 'react-router-dom';
import { StoreIcon } from '../icons';
import NotFound from './notFound';
import Button from '../components/button';
import { getUser } from '../api/api';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [franchiseName, setFranchiseName] = React.useState('');

  const franchises = [
    { name: 'SuperPie', totalRevenue: 3000000, address: 'Cedar City' },
    { name: 'LotaPizza', totalRevenue: 53000, address: 'Salt Lake City' },
    { name: 'PizzaCorp', totalRevenue: 458767832, address: 'Orem' },
  ];

  function createFranchise() {
    navigate('/admin-dashboard/create-franchise', { state: { franchise: franchiseName } });
  }

  function refundFranchise(franchise) {
    navigate('/admin-dashboard/refund-franchise', { state: { franchise: franchise.name, refundAmount: franchise.totalRevenue } });
  }

  const user = getUser();
  if (user?.role !== 'admin') {
    return <NotFound />;
  }

  return (
    <View title="Mama Ricci's kitchen">
      <div className='text-neutral-100'>Keep the dough rolling and the franchises signing up.</div>

      <div className='bg-neutral-100 overflow-clip my-4'>
        <div className='flex flex-col'>
          <div className='-m-1.5 overflow-x-auto'>
            <div className='p-1.5 min-w-full inline-block align-middle'>
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                  <thead>
                    <tr>
                      <th scope='col' className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>
                        Name
                      </th>
                      <th scope='col' className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>
                        Age
                      </th>
                      <th scope='col' className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>
                        Address
                      </th>
                      <th scope='col' className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                    {franchises.map((franchise) => (
                      <tr key={franchise.name} className='hover:bg-gray-100 dark:hover:bg-neutral-700'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{franchise.name}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>
                          ${franchise.totalRevenue.toLocaleString()}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>{franchise.address}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                          <button
                            type='button'
                            className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400'
                            onClick={() => refundFranchise(franchise)}
                          >
                            Refund
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='max-w-sm space-y-3 py-4  flex-1'>
          <div className='relative'>
            <input
              type='text'
              value={franchiseName}
              onChange={(e) => setFranchiseName(e.target.value)}
              className='peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              placeholder='New franchise name'
            />
            <div className='absolute   text-orange-800 inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none'>
              <StoreIcon />
            </div>
          </div>
        </div>
        <Button className='flex-none' title='Franchise!' onPress={createFranchise} />
      </div>
    </View>
  );
}
