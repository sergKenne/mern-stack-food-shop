import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
require('../../../node_modules/slick-carousel/slick/slick.js');

import Announce from '../../components/home/announce';
import Banner from '../../components/home/banner';
import Delivery from '../../components/home/delivery';
import HappyHour from '../../components/home/happyHour';
import Info from '../../components/home/info';
import Menu from '../../components/home/menu';
import Personnels from '../../components/home/personnels';
import Postes from '../../components/home/postes';
import ServiceHome from '../../components/home/serviceHome';
import fetchProducts from '../../redux/reducers/productsReducer/actionCreators';
import { TypedDispatch } from '../../redux/store';
import { setSlider } from '../../utils';

const Home = () => {
  const dispatch = useDispatch<TypedDispatch>()
  useEffect(() => {
    setSlider();
    dispatch(fetchProducts())
  }, [dispatch])
  
  return (
    <>
        <Banner />
        <ServiceHome />
        <Announce />
        <Menu />
        <Delivery />
        <Personnels />
        <HappyHour />
        <Postes />
        <Info/>
    </>
  );
};

export default Home;
