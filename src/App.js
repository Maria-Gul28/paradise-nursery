import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/productListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import Header from './components/header';

const App = () => {
  // Remove the local cart state since we're using Redux
  return (
    <Router>
      {/* Header will access cart count via Redux */}
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
};

export default App;