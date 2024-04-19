import React from 'react';
import { useEffect } from 'react';
import { useLocation, Routes, Route, NavLink } from 'react-router-dom';
import Main from './views/main';
import Home from './views/home';
import About from './views/about';
import Login from './views/login';
import Logout from './views/logout';
import Menu from './views/menu';
import FranchiseDashboard from './views/franciseDashboard';
import History from './views/history';
import AdminDashboard from './views/adminDashboard';
import CreateStore from './views/createStore';
import RefundStore from './views/refundStore';
import Payment from './views/payment';
import NotFound from './views/notFound';
import Breadcrumb from './components/breadcrumb';
import { HamburgerIcon, CloseIcon } from './icons';
import { getUser } from './api/api';
import 'preline/preline';

export default function App() {
  const user = getUser();
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  function loggedIn() {
    return !!getUser();
  }

  function loggedOut() {
    return !loggedIn();
  }

  const navItems = [
    { title: 'Home', to: '/', component: <Home />, desc: "The valley's best pizza", display: [] },
    { title: 'Order', to: '/menu', component: <Menu />, display: ['nav'] },
    { title: 'Franchise', to: '/franchise-dashboard', component: <FranchiseDashboard />, desc: 'Franchise portal', display: ['nav', 'footer'] },
    { title: 'About', to: '/about', component: <About />, desc: 'The secret sauce', display: ['footer'] },
    { title: 'History', to: '/history', component: <History />, display: ['footer'] },
    { title: 'Admin dashboard', to: '/admin-dashboard', component: <AdminDashboard />, display: ['admin'] },
    { title: 'Create store', to: '/:subPath?/create-store', component: <CreateStore />, display: [] },
    { title: 'Store refund', to: '/:subPath?/refund-store', component: <RefundStore />, display: [] },
    { title: 'Payment', to: '/payment', component: <Payment />, display: [] },
    { title: 'Opps', to: '*', component: <NotFound />, display: [] },
    { title: 'Login', to: '/:subPath?/login', component: <Login />, constraint: [loggedOut], display: ['nav'] },
    { title: 'Logout', to: '/:subPath?/logout', component: <Logout />, constraint: [loggedIn], display: ['nav'] },
  ];

  return (
    <div className='bg-gray-800'>
      <Header user={user} navItems={(user, navItems)} />
      <Breadcrumb location={location.pathname.replace('/', '')} />

      <main className='size-full'>
        <Routes>
          {navItems.map((item) => (
            <Route key={item.title} path={item.to} element={<Main title={item.desc || item.title}>{item.component}</Main>} exact />
          ))}
        </Routes>
      </main>

      <Footer navItems={navItems} />
    </div>
  );
}

function Header({ user, navItems }) {
  return (
    <div className='space-y-4'>
      <header className='flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-800 text-sm py-4 dark:bg-white'>
        <nav className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between' aria-label='Global'>
          <div className='flex items-center justify-between'>
            <img className='w-10 m-3' src='/pizza-shop-icon.png' />
            <span className='font-normal flex-none text-4xl dark:text-gray-800 bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-300 text-transparent'>
              Pizza Shop
            </span>
            <div className='sm:hidden'>
              <button
                type='button'
                className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
                data-hs-collapse='#navbar-dark'
                aria-controls='navbar-dark'
                aria-label='Toggle navigation'
              >
                <HamburgerIcon />
                <CloseIcon />
              </button>
            </div>
          </div>
          <div id='navbar-dark' className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'>
            <div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5'>
              {navItems.map(
                (item) =>
                  item.display.includes('nav') &&
                  (!item.constraint || item.constraint.every((f) => f())) && (
                    <NavLink
                      key={item.title}
                      className='font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400  focus:text-orange-600'
                      to={item.to.replace(':subPath?/', '')}
                    >
                      {item.title}
                    </NavLink>
                  )
              )}
            </div>
          </div>
          <div className='pl-4 font-semibold text-orange-400'>{user?.email}</div>
        </nav>
      </header>
    </div>
  );
}

function Footer({ navItems }) {
  return (
    <footer className='m-8 flex justify-center'>
      <div className='container border-t-2 border-gray-200 dark:border-gray-700 max-w-3xl'>
        <nav className='-mb-0.5 flex space-x-6 justify-between'>
          {navItems.map(
            (item) =>
              item.display.includes('footer') && (
                <NavLink
                  key={item.title}
                  className=' py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-gray-200 hover:text-orange-600 focus:text-orange-600'
                  to={item.to}
                >
                  {item.title}
                </NavLink>
              )
          )}
        </nav>
        <p className='text-sm text-center italic text-gray-400'>© 2024 Pizza Shop LTD. All rights reserved.</p>
      </div>
    </footer>
  );
}
