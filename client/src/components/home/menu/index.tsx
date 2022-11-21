import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReduxState } from '../../../redux/store';

import { setMenuSlider, setTabs } from '../../../utils';
import Card from '../../commons/card';

const Menu = () => {
  const { products } = useSelector((state: ReduxState) => state.products);

  const getProductByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  useEffect(() => {
    const tabItem = document.querySelectorAll('.menu__tabs-item');
    setTabs(tabItem, 'menu__tabs-item--active');

    const menuNavItem = document.querySelectorAll('.menu__nav-item');
    setTabs(menuNavItem, 'menu__nav-item--active');
    setMenuSlider();

    //MENUSLIDER
    document.querySelectorAll('.menu__slider').forEach((item) => {
      if (item.getAttribute('data-tab') !== 'burgers') {
        item.classList.add('hide');
      } else {
        item.classList.remove('hide');
      }
    });

    document.querySelectorAll('.menu__nav-item').forEach((elt) => {
      elt.addEventListener('click', () => {
        const category = elt.getAttribute('data-category');
        document.querySelectorAll('.menu__slider').forEach((item) => {
          if (item.getAttribute('data-tab') !== category) {
            item.classList.add('hide');
          } else {
            item.classList.remove('hide');
          }
        });
      });
    });
  }, []);

  return (
    <section className="menu">
      <div className="container">
        <ul className="menu__nav">
          <li
            className="menu__nav-item menu__nav-item--active"
            data-category="burgers"
            onClick={() => getProductByCategory('burgers')}
          >
            Burgers
          </li>
          <li
            className="menu__nav-item"
            data-category="pizza"
            onClick={() => getProductByCategory('pizza')}
          >
            Pizza
          </li>
          <li
            className="menu__nav-item"
            data-category="sushi"
            onClick={() => getProductByCategory('sushi')}
          >
            Sushi
          </li>
          <li
            className="menu__nav-item"
            data-category="noodles"
            onClick={() => getProductByCategory('noodles')}
          >
            Noodles
          </li>
        </ul>
        <div className="menu__wrap-content-tabs">
          {['noodles', 'pizza', 'sushi', 'burgers'].map((cat, ind) => (
            <div key={`${cat}-${ind}`} className="menu__slider" data-tab={cat}>
              <div className="menu-slider">
                {getProductByCategory(cat)
                  .slice(0, 8)
                  .map((prod: any) => (
                    <div className="menu__slide-item" key={prod.img}>
                      <Card product={{ ...prod, addClass: 'service__card' }} />
                    </div>
                  ))}
                <div className="menu__slide-item">
                  <div className="card service__card service__card--view-more">
                    <Link to={`/products-category/${cat}`}>
                      <button className="card__btn-view-more">View more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
