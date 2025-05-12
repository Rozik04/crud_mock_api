// MainRouters.jsx
import React, { lazy, Suspense } from 'react';
import Create from './create/Create';
import Get from './get/Get';
import Home from './home/Home';
import Delete from './delete/Delete'; // Delete komponentini import qilish
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Details from './details/Details';

const Layout = lazy(() => import('./layout/Layout'));

const MainRouters = () => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1 flex justify-center items-center">
        <Routes>
          {/* Suspense bilan Layout o'ralgan */}
          <Route
            path="/"
            element={
              <Suspense fallback={<div className="text-center text-lg font-semibold">Loading...</div>}>
                <Layout />
              </Suspense>
            }
          >
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="delete" element={<Delete />} />
            <Route path="get" element={<Get />} />
            <Route path="users/:id" element={<Details />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default MainRouters;
