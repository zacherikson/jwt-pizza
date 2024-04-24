import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import View from './view';
import { CautionIcon } from '../icons';
import Button from '../components/button';
import { Api } from '../api/api';

export default function FranchiseDashboard({ user }) {
  const navigate = useNavigate();
  const [franchise, setFranchise] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setFranchise(await Api.getFranchise(user));
    })();
  }, [user]);

  function createStore() {
    navigate('/franchise-dashboard/create-store');
  }

  function closeStore(franchise, store) {
    navigate('/franchise-dashboard/close-store', { state: { franchise: franchise, store: store } });
  }

  if (!Api.isFranchisee(user)) {
    return whyFranchise();
  }

  return (
    <View title='Franchise central'>
      <div className='text-neutral-100'>Everything you need to run an NFT Pizza franchise. Your gateway to success.</div>

      <div className='bg-neutral-100 overflow-clip my-4'>
        <div className='flex flex-col'>
          <div className='-m-1.5 overflow-x-auto'>
            <div className='p-1.5 min-w-full inline-block align-middle'>
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                  <thead className='uppercase text-neutral-100 bg-slate-400 border-b-2 border-gray-500'>
                    <tr>
                      <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                        City
                      </th>
                      <th scope='col' className='px-6 py-3 text-start text-xs font-medium'>
                        Address
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
                    {franchise.stores?.map((store) => (
                      <tr key={store.city} className='hover:bg-gray-100 dark:hover:bg-neutral-700'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200'>{store.city}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>{store.address}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200'>${store.totalRevenue.toLocaleString()}</td>
                        <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
                          <button
                            type='button'
                            className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400'
                            onClick={() => closeStore(franchise, store)}
                          >
                            close
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

      <Button className='flex-none' title='Create store' onPress={createStore} />
    </View>
  );
}

function whyFranchise() {
  return (
    <View title='So you want a piece of the pie'>
      <div className='text-left py-8 px-4 sm:px-6 lg:px-8'>
        <div className='my-4 bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500' role='alert'>
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
          <img src='/pizza-shop-logo.png' className='border-solid border-2 border-orange-700 w-64 m-4 float-left' />
          <p className='py-2 text-white'>
            To purchase a franchise call <span className='font-semibold text-orange-400'>1-800-555-5555</span>
          </p>
          <p className='py-2 text-white'>
            Now is the time to get in on the NFT Pizza tsunami. The pizza sells itself. People cannot get enough. Setup your shop and let the pizza fly. Here are all the reasons why you should buy a
            franchise with NFT Pizza.
          </p>
          <p className='py-2 text-white'>
            Owning a franchise with NFT Pizza can be highly profitable. With our proven business model and strong brand recognition, you can expect to generate significant revenue. Our profit
            forecasts show consistent growth year after year, making it a lucrative investment opportunity.
          </p>
          <p className='py-2 text-white'>
            In addition to financial success, owning a franchise also allows you to make a positive impact on your community. By providing delicious pizzas and creating job opportunities, you
            contribute to the local economy and bring joy to people's lives. It's a rewarding experience that combines entrepreneurship with social responsibility. The following table shows a possible
            stream of income from your franchise.
          </p>
          <div className='bg-neutral-100 overflow-clip my-4'>
            <div className='flex flex-col'>
              <div className='-m-1.5 overflow-x-auto'>
                <div className='p-1.5 min-w-full inline-block align-middle'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                      <thead className='uppercase text-neutral-100 bg-slate-400 border-b-2 border-gray-500'>
                        <tr>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-medium'>
                            Year
                          </th>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-medium'>
                            Profit
                          </th>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-medium'>
                            Costs
                          </th>
                          <th scope='col' className='px-6 text-sm py-3 text-start font-medium'>
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
          <div className='py-4'>
            <h2 className='py-2 text-2xl sm:text-4xl font-thin text-orange-600'>Unleash Your Potential</h2>
            <p className='py-2 text-neutral-100 text-left mx-4 pb-4 first-line:uppercase first-line:tracking-widest  first-letter:text-7xl first-letter:font-bold first-letter:text-orange-800  first-letter:mr-3 first-letter:float-left'>
              Are you ready to embark on a journey towards unimaginable wealth? Owning a franchise with NFT Pizza is your ticket to financial success. With our proven business model and strong brand
              recognition, you have the opportunity to generate substantial revenue. Imagine the thrill of watching your profits soar year after year, as customers flock to your NFT Pizza, craving our
              mouthwatering creations.
            </p>
            <p className='py-2 text-white'>
              But it's not just about the money. By becoming a franchise owner, you become part of a community that is passionate about delivering exceptional pizzas and creating memorable
              experiences. You'll have the chance to build a team of dedicated employees who share your vision and work together to achieve greatness. And as your business grows, so does your impact
              on the local economy, creating jobs and bringing joy to countless pizza lovers.
            </p>
          </div>
          <p className='py-2 text-white'>
            To purchase a franchise call <span className='font-semibold text-orange-400'>1-800-555-5555</span>
          </p>
        </div>
      </div>
    </View>
  );
}
