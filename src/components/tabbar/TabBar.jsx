// TabBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './tabbar.modules.css';

function TabBar() {
  return (
    <nav className='tabbar'>
      <ul className='tabbar-list'>
        <li>
          <NavLink to='/' >Home</NavLink>
        </li>
        <li>
          <NavLink to='/add' >Add</NavLink>
        </li>
        <li>
          <NavLink to='/my' >My</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TabBar;
