import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
//import GridLoader from 'react-spinners/GridLoader';
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

const App = () => {
  const dispatch = useDispatch<TypedDispatch>();
  
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

    return (
      <div className="page">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop/:category/:id' element={<Detail />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/products-category/:category' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    )
};

export default App;
