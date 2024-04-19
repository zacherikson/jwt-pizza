import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Path1() {
  return (
    <div>
      <div className='text-neutral-100'>You are on path 1</div>
      <NavLink to='/path1/path2'>Go to path 2</NavLink>
    </div>
  );
}
