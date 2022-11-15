import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../../redux/reducers/productsCategoryReducer/actionCreators';
import { TypedDispatch } from '../../redux/store';
import { NavbarItemProps } from './type';

const NavbarItem = ({ category, icon }: NavbarItemProps) => {
  const dispatch = useDispatch<TypedDispatch>();

  return (
    <li className="navbar__item">
      <Link
        to={`/products-category/${category}`}
        className="navbar__link"
        onClick={() => dispatch(getProductsByCategory(category))}
      >
        <svg className="navbar__link-icon">
          <use xlinkHref={`#svg-${icon}`}></use>
        </svg>
        <span className="navbar__link-text">{category}</span>
      </Link>
    </li>
  );
};

export default NavbarItem;
