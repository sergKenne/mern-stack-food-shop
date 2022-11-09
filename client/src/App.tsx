import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';
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
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    dispatch(fetchProducts());
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);


  // if (loading) {
  //   return (<div className="load-spinner" >
  //       <GridLoader color={'#fdfdfd'} loading={loading} size={20} />
  //     </div >)
  // } 
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
