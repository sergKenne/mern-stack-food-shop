import React from 'react';
import { IProduct } from '../../../redux/commons.types';
import Card from '../../commons/card';

const MenuSlider = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="menu__slider">
      {!!products.length && (
        <div className="menu-slider">
          {products.map((product: IProduct, ind: number) => (
            <div className="menu__slide-item" key={`${ind}${Math.random()}`}>
              <Card product={{ ...product, addClass: 'service__card' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSlider;
