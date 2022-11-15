import React from 'react';
import { NavbarSocialProps } from './type';

const NavbarSocial = ({ icon }: NavbarSocialProps) => {
  return (
    <a href="#" className="header__socials-link">
      <svg className="header__socials-svg">
        <use xlinkHref={`#svg-${icon}`}></use>
      </svg>
    </a>
  );
};

export default NavbarSocial;
