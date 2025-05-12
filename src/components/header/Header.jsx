import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
<div className='relative flex '>
      <header className="fixed left-0 top-0 w-[250px] h-screen bg-gray-800 text-white p-4 z-50">
      <nav className="flex flex-col gap-4 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'block p-2 bg-blue-600 rounded-md text-white'
              : 'block p-2 hover:bg-blue-500 rounded-md'
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'block p-2 bg-blue-600 rounded-md text-white'
              : 'block p-2 hover:bg-blue-500 rounded-md'
          }
          to="/create"
        >
          Create
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'block p-2 bg-blue-600 rounded-md text-white'
              : 'block p-2 hover:bg-blue-500 rounded-md'
          }
          to="/delete"
        >
          Delete
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'block p-2 bg-blue-600 rounded-md text-white'
              : 'block p-2 hover:bg-blue-500 rounded-md'
          }
          to="/get"
        >
          Get
        </NavLink>
      </nav>
    </header>
         <div className='absolute right-[191px]  w-[1480px] border h-[70px] bg-gray-800 bottom-211 fixed'>
          <h1 className="text-center text-3xl font-semibold text-gray-100 mb-2 pt-[15px]">Management System Users</h1>
         </div>
</div>
  );
};

export default Header;
