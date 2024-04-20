import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import View from './view';
import { CautionIcon, StoreIcon } from '../icons';
import Button from '../components/button';
import { getUser } from '../api/api';

export default function FranchiseDashboard() {
  const navigate = useNavigate();
  const [storeName, setStoreName] = React.useState('');
  const user = getUser();

  const stores = [
    { name: 'Orem', totalRevenue: 3000000, address: '234 N 300 S' },
    { name: 'Provo', totalRevenue: 53000, address: '234 N 300 S' },
    { name: 'Payson', totalRevenue: 458767832, address: '234 N 300 S' },
  ];

  function createStore() {
    navigate('/franchise-dashboard/create-store', { state: { store: storeName } });
  }

  function deleteStore(store) {
    alert(`Deleted store ${store.name}!`);
  }

  if (user?.role !== 'franchise') {
    return whyFranchise();
  }

  return (
    <View title='Pizza pie central'>
      <div className='text-neutral-100'>Everything you need to run Pizza Shop.</div>

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
                    {stores.map((store) => (
                      <tr key={store.name} className='hover:bg-gray-100 dark:hover:bg-neutral-700'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{store.name}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>
                          ${store.totalRevenue.toLocaleString()}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>{store.address}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                          <button
                            type='button'
                            className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400'
                            onClick={() => deleteStore(store)}
                          >
                            delete
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
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className='peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
              placeholder='Enter name'
            />
            <div className='absolute   text-orange-800 inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none'>
              <StoreIcon />
            </div>
          </div>
        </div>
        <Button className='flex-none' title='Create store' onPress={createStore} />
      </div>
    </View>
  );
}

function whyFranchise() {
  return (
    <View title='So you want a piece of the pie'>
      <div className='text-left'>
        <div
          className='my-4 bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500'
          role='alert'
        >
          <div className='flex'>
            <div className='flex-shrink-0'>
              <CautionIcon />
            </div>
            <div className='ms-4'>
              <div className='mt-1 text-sm text-yellow-700'>
                If you are already a franchiser, please
                <span className='font-semibold mx-1 text-yellow-800 underline'>
                  <NavLink to='/franchise-dashboard/login'>login</NavLink>
                </span>
                using your franchise account
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src='/pizza-shop-logo.png' className='w-64 m-4 float-left' />
          <p className='py-2 text-white'>
            To purchase a franchise call <span className='font-semibold text-orange-400'>1-800-555-5555</span>
          </p>
          <p className='py-2 text-white'>
            Now is the time to get in on the Pizza Shop tsunami. The pizza sells itself. People cannot get enough. Setup your shop and let the pizza
            fly. Here are all the reasons why you should buy a franchise with the Pizza Shop.
          </p>
          <p className='py-2 text-white'>
            Owning a franchise with the Pizza Shop can be highly profitable. With our proven business model and strong brand recognition, you can
            expect to generate significant revenue. Our profit forecasts show consistent growth year after year, making it a lucrative investment
            opportunity.
          </p>
          <p className='py-2 text-white'>
            In addition to financial success, owning a franchise also allows you to make a positive impact on your community. By providing delicious
            pizzas and creating job opportunities, you contribute to the local economy and bring joy to people's lives. It's a rewarding experience
            that combines entrepreneurship with social responsibility.
          </p>
          <div className='bg-neutral-100 overflow-clip my-4'>
            <div className='flex flex-col'>
              <div className='-m-1.5 overflow-x-auto'>
                <div className='p-1.5 min-w-full inline-block align-middle'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                      <thead>
                        <tr>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-extrabold text-gray-500 uppercase dark:text-neutral-500'>
                            Year
                          </th>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-extrabold text-gray-500 uppercase dark:text-neutral-500'>
                            Profit
                          </th>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-extrabold text-gray-500 uppercase dark:text-neutral-500'>
                            Costs
                          </th>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-extrabold text-gray-500 uppercase dark:text-neutral-500'>
                            Franchise Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                        <tr>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>2020</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$500,000</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$400,000</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$50,000</td>
                        </tr>
                        <tr>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>2021</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$750,000</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$500,000</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$50,000</td>
                        </tr>
                        <tr>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>2022</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$1,000,000</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$600,000</td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>$50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='py-2 text-white'>
            Artisan occupy pug, banjo etsy woke. Tumeric banh mi pug, irony venmo Matt Holt. VHS banjo 8-bit, chambray Brendan Eich venmo. Tote bag
            skateboard banh mi, irony pug venmo. Tumeric banjo pug, etsy shoreditch Uncle Bob. Mixtape banh mi farm-to-table, irony pug Evan You.
            Artisan occupy pug, banjo etsy woke. Tumeric banh mi pug, irony venmo Linus Torvalds.
          </p>
          <p className='py-2 text-white'>
            Pug banjo 8-bit, chambray Ryan Dahl venmo. Tote bag skateboard banh mi, irony pug venmo. Tumeric banjo pug, etsy shoreditch TJ
            Holowaychuk. Mixtape banh mi farm-to-table, irony pug Jordan Walke. Artisan occupy pug, banjo etsy woke. Tumeric banh mi pug, irony venmo
            Alan Ashton. VHS banjo 8-bit, chambray Tim Berners-Lee venmo.
          </p>
          <p className='py-2 text-white'>
            To purchase a franchise call <span className='font-semibold text-orange-400'>1-800-555-5555</span>
          </p>
        </div>
      </div>
    </View>
  );
}
