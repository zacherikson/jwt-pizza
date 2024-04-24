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
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead className='uppercase text-neutral-100 bg-slate-400 border-b-2 border-gray-500'>
                        <tr>
                          <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                            Franchise
                          </th>
                          <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                            Franchisee
                          </th>
                          <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                            Store
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
                      {franchises.map((franchise, findex) => {
                        return (
                          <tbody key={findex} className='divide-y divide-gray-200'>
                            <tr className='bg-neutral-300'>
                              <td className='text-left px-2 whitespace-nowrap text-sm font-medium text-slate-600'>{franchise.name}</td>
                              <td className='text-left px-2 whitespace-nowrap text-sm font-normal text-gray-800' colSpan={4}>
                                {franchise.admin.join(', ')}
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>Delete</td>
                            </tr>

                            {franchise.stores.map((store, sindex) => {
                              return (
                                <tr key={sindex} className='bg-neutral-100'>
                                  <td className='text-left px-2 whitespace-nowrap text-sm text-gray-800' colSpan={3}>
                                    {store.name}
                                  </td>
                                  <td className='text-left px-2 whitespace-nowrap text-sm text-gray-800'>{store.location}</td>
                                  <td className='text-left px-2 whitespace-nowrap text-sm text-gray-800'>${store.totalRevenue.toLocaleString()}</td>
                                  <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                                    <button
                                      type='button'
                                      className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none'
                                      onClick={() => closeStore(franchise, store)}
                                    >
                                      Close
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button className='w-36 text-xs sm:text-sm sm:w-64' title='Add Franchise' onPress={createFranchise} />
        </div>
      </View>
    );
  }

  return response;
}
