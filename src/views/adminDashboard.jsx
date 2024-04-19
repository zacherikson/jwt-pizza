import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div>
      <div className='text-neutral-100'>You are the admin dashboard</div>
      <ol>
        <li>
          <NavLink to='/admin-dashboard/create-store'>Create store</NavLink>
        </li>
        <li>
          <NavLink to='/admin-dashboard/store-refund' state={{ store: `Orem` }}>
            Store refund
          </NavLink>
        </li>
      </ol>
    </div>
  );
}
