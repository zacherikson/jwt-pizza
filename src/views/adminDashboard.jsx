import React from 'react';
import View from './view';
import { useNavigate } from 'react-router-dom';
import NotFound from './notFound';
import Button from '../components/button';
import Api from '../api/api';

export default function AdminDashboard({ user }) {
  const navigate = useNavigate();
  const [franchises, setFranchises] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setFranchises(await Api.getFranchises());
    })();
  }, [user]);

  function createFranchise() {
    navigate('/admin-dashboard/create-franchise');
  }

  function refundFranchise(franchise) {
    navigate('/admin-dashboard/refund-franchise', { state: { franchise: franchise.name, refundAmount: franchise.totalRevenue } });
  }

  let response = <NotFound />;
  if (Api.isAdmin(user)) {
    response = (
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
                          Revenue
                        </th>
                        <th scope='col' className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>
                          Franchisee
                        </th>
                        <th scope='col' className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                      {franchises.map((franchise) => (
                        <tr key={franchise.name} className='hover:bg-gray-100 dark:hover:bg-neutral-700'>
                          <td className='text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>
                            {franchise.name}
                          </td>
                          <td className='text-left px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>
                            ${franchise.totalRevenue.toLocaleString()}
                          </td>
                          <td className='text-left px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>
                            {franchise.franchisee}
                          </td>
                          <td className='text-left px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
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
          <Button className='flex-none' title='Franchise!' onPress={createFranchise} />
        </div>
      </View>
    );
  }

  return response;
}
