import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarItemProps } from './type'


const NavbarItem = ({category, icon}:NavbarItemProps) => {
  return (
      <li className="navbar__item">
          <Link to={`/product-category/${category}`} className="navbar__link">
              <svg className="navbar__link-icon">
                  <use xlinkHref={`#svg-${icon}`}></use>
              </svg>
              <span className="navbar__link-text">{ category}</span>
          </Link>
      </li>
  )
}

export default NavbarItem