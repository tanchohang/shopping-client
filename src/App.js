import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';

import Navbar from './component/Navbar';
import Notfound from './pages/notfound';
import MainLayout from './component/MainLayout';
import SubLayout from './component/SubLayout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Home />} />

        <Route path="men">
          <Route index element={<MainLayout filter="men" />} />
          <Route path="new-arrivals" element={<SubLayout />} />
          <Route path="sales" />
        </Route>
        <Route path="women" element={<MainLayout filter="women" />} />
        <Route path="kids" element={<MainLayout filter="kids" />} />
        <Route path="sales" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
