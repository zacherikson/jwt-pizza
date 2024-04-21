import React from 'react';
import { useEffect } from 'react';
import { useLocation, Routes, Route, NavLink } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from '../views/home';
import About from '../views/about';
import Login from '../views/login';
import Logout from '../views/logout';
import Menu from '../views/menu';
import FranchiseDashboard from '../views/franchiseDashboard';
import History from '../views/history';
import AdminDashboard from '../views/adminDashboard';
import DinnerDashboard from '../views/dinnerDashboard';
import CreateStore from '../views/createStore';
import CreateFranchise from '../views/createFranchise';
import RefundFranchise from '../views/refundFranchise';
import Payment from '../views/payment';
import NotFound from '../views/notFound';
import Breadcrumb from '../components/breadcrumb';
import Api from '../api/api';
import 'preline/preline';

export default function App() {
  const [user, setUser] = React.useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const user = await Api.getUser();
      setUser(user);
    })();
  }, []);

  useEffect(() => {
    window.HSStaticMethods.autoInit();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function loggedIn() {
    return !!user;
  }
  function loggedOut() {
    return !loggedIn();
  }

  const navItems = [
    { title: 'Home', to: '/', component: <Home />, display: [] },
    { title: 'Dinner', to: '/dinner-dashboard', component: <DinnerDashboard user={user} />, display: [] },
    { title: 'Order', to: '/menu', component: <Menu />, display: ['nav'] },
    { title: 'Franchise', to: '/franchise-dashboard', component: <FranchiseDashboard user={user} />, display: ['nav', 'footer'] },
    { title: 'About', to: '/about', component: <About />, display: ['footer'] },
    { title: 'History', to: '/history', component: <History />, display: ['footer'] },
    { title: 'Admin dashboard', to: '/admin-dashboard', component: <AdminDashboard user={user} />, display: ['admin'] },
    { title: 'Create store', to: '/:subPath?/create-store', component: <CreateStore />, display: [] },
    { title: 'Create Franchise', to: '/:subPath?/create-franchise', component: <CreateFranchise />, display: [] },
    { title: 'Franchise refund', to: '/:subPath?/refund-franchise', component: <RefundFranchise />, display: [] },
    { title: 'Payment', to: '/payment', component: <Payment />, display: [] },
    { title: 'Opps', to: '*', component: <NotFound />, display: [] },
    { title: 'Login', to: '/:subPath?/login', component: <Login setUser={setUser} />, constraints: [loggedOut], display: ['nav'] },
    { title: 'Logout', to: '/:subPath?/logout', component: <Logout setUser={setUser} />, constraints: [loggedIn], display: ['nav'] },
  ];

  return (
    <div className='bg-gray-800'>
      <Header user={user} navItems={(user, navItems)} />
      <Breadcrumb location={location.pathname.replace('/', '')} />

      <main className='size-full'>
        <Routes>
          {navItems.map((item) => (
            <Route key={item.title} path={item.to} element={item.component} exact />
          ))}
        </Routes>
      </main>

      <Footer navItems={navItems} />
    </div>
  );
}
