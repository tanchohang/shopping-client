import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Navbar from './component/Navbar';
import Notfound from './pages/notfound';
import MainLayout from './component/MainLayout';
import ProductDetail from './pages/product-details';
import CategoryLayout from './component/CategoryLayout';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={< ProductDetail/>} />


        <Route path="men">
          <Route index element={<MainLayout filter="men" />} />
          <Route path="category" element={<CategoryLayout />} />

          <Route path="sales" />
        </Route>
        <Route path="women" element={<MainLayout filter="women" />} />
        <Route path="kids" element={<MainLayout filter="kids" />} />
        <Route path="sales" element={<Home />} />
        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
