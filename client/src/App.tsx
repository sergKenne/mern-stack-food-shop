import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Footer from './components/footer';
import Header from './components/header';
import Detail from './pages/detailScreen';
import Home from './pages/homeScreen';
import Products from './pages/productsScreen';

const App: React.FC = () => {
  
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/product-category/:category' element={<Products />} />
        <Route element={<h1>Page not Found</h1> } />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
