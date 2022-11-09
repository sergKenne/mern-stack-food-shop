import { IProduct } from './redux/commons.types';

import jquery from 'jquery';
const $: JQueryStatic = jquery;

export const setSlider = (): void => {
  $('.banner-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  });

  //Service slider
  $('.service-slider').slick({
    infinite: true,
    initialSlide: 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //Menu slider
  // $('.menu-slider').slick({
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 950,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 680,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 470,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // });

  //personals-slider
  $('.personals-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });

  // const tabItem = document.querySelectorAll('.menu__tabs-item'); 
  // const menuNavItem = document.querySelectorAll('.menu__nav-item');

  // setTabs(tabItem, 'menu__tabs-item--active');
  // setTabs(menuNavItem, 'menu__nav-item--active');

  // function setTabs(els:any, className:string) {
  //   els.forEach((item:any) => {
  //     item.addEventListener('click', () => {
  //       els.forEach((el:any) => {
  //         el.classList.remove(className);
  //       });
  //       item.classList.add(className);
  //     });
  //   });
  // }
};

export function setMenuSlider() {
  $('.menu-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}


export function setTabs(els: any, className: string) {
  els.forEach((item: any) => {
    item.addEventListener('click', () => {
      els.forEach((el: any) => {
        // if (el.classList.contains(className)) {
          el.classList.remove(className);
        // } 
      });
      item.classList.add(className);
    });
  });
}


export const getTabsElements = (category: string, products: IProduct[]) => {
  const productsCat = products.filter(
    (product) => product.category === category
  ); 
  return [
    ...new Set(
      productsCat.reduce(
        (acc: any, curr: any) => (curr.type ? [...acc, curr.type] : acc),
        []
      )
    ),
  ]; 
};



