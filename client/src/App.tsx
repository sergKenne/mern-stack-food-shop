import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Detail from './pages/detailScreen';
import Home from './pages/homeScreen';
import Products from './pages/productsScreen';
import Error from './pages/errorScreen';
import { useDispatch } from 'react-redux';
import fetchProducts from './redux/reducers/productsReducer/actionCreators';
import { TypedDispatch } from './redux/store';
import Shop from './pages/shopScreen';
import ProductsCart from './pages/cartScreen';
import NavbarFooter from './components/navbarFooter';
import { Link } from "react-scroll";
import { setSmoothScrool } from './utils';


const App = () => {
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
    setSmoothScrool()
  }, []);

  return (
    <div className="page" id="top">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:category/:id" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<ProductsCart />} />
        <Route path="/products-category/:category" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <NavbarFooter />
      <Footer />
      <Link
        className="linkToHome"
        to="top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <svg className="linkToHome__svg">
          <use xlinkHref="#svg-to-top"></use>
        </svg>
      </Link>
    </div>
  );
};

export default App;
