import React from 'react';
import View from './view';
import { useNavigate } from 'react-router-dom';
import NotFound from './notFound';
import Button from '../components/button';
import { Api } from '../api/api';

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

  function closeStore(franchise, store) {
    navigate('/admin-dashboard/close-store', { state: { franchise: franchise, store: store } });
  }
  let c = 0;

  let response = <NotFound />;
  if (Api.isAdmin(user)) {
    response = (
      <View title="Mama Ricci's kitchen">
        <div className='text-left py-8 px-4 sm:px-6 lg:px-8'>
          <div className='text-neutral-100'>Keep the dough rolling and the franchises signing up.</div>

          <div className='bg-neutral-100 overflow-clip my-4'>
            <div className='flex flex-col'>
              <div className='-m-1.5 overflow-x-auto'>
                <div className='p-1.5 min-w-full inline-block align-middle'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                      <thead className='uppercase text-neutral-100 bg-slate-400 border-b-2 border-gray-500'>
                        <tr>
                          <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                            Name
                          </th>
                          <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                            Franchisee
                          </th>
                          <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                            Location
                          </th>
                          <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                            Revenue
                          </th>
                          <th scope='col' className='px-6 py-3 text-end text-xs font-medium'>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                        {franchises.map((franchise) => {
                          return franchise.stores.map((store, sindex) => (
                            <>
                              {sindex === 0 && (
                                <tr key={c++} className='bg-neutral-300'>
                                  <td className='text-left px-2 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-neutral-200'>{franchise.name}</td>
                                  <td className='text-left px-2 whitespace-nowrap text-sm font-normal text-gray-800 dark:text-neutral-200'>{franchise.admin.join(',')}</td>
                                  <td className='text-left px-2 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'></td>
                                  <td className='text-left px-2 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>{c}</td>
                                  <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'></td>
                                </tr>
                              )}
                              <tr key={c++} className='bg-neutral-100'>
                                <td className='text-left px-2 whitespace-nowrap text-sm font-medium text-orange-600 dark:text-neutral-200'></td>
                                <td className='text-left px-2 whitespace-nowrap text-sm font-semibold text-gray-800 dark:text-neutral-200'>{c}</td>
                                <td className='text-left px-2 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>
                                  {store.address}, {store.city}
                                </td>
                                <td className='text-left px-2 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>${store.totalRevenue.toLocaleString()}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                                  <button
                                    type='button'
                                    className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400'
                                    onClick={() => closeStore(franchise, store)}
                                  >
                                    Close
                                  </button>
                                </td>
                              </tr>
                            </>
                          ));
                        })}
                      </tbody>
                    </table>
                  </div>
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
