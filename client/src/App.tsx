import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Detail from './pages/detailScreen';
import Home from './pages/homeScreen';
import Products from './pages/productsScreen';
import Error from './pages/errorScreen';

const App: React.FC = () => {
  
  useEffect(() => {
    fetch('http://localhost:3000/Burgers')
      .then(response => response.json())
    .then(data => console.log(data))
  },[])
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/product-category/:category' element={<Products />} />
        <Route path='*' element={ <Error/> } />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
