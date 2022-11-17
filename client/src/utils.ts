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
    infinite: false,
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

  //personals-slider
  $('.personals-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
};

export function setMenuSlider() {
  $('.menu-slider').slick({
    infinite: false,
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
        el.classList.remove(className);
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

export const getTotalCartQty = (cart: IProduct[] | null) => {
  return cart?.reduce((acc, curr: any) => {
    return acc + curr?.qty;
  }, 0);
};

export const getTotalCartPrice = (cart: IProduct[] | null) => {
  const total = cart?.reduce((acc, curr: any) => {
    return Number((acc + curr?.qty * curr.price).toFixed(2));
  }, 0);
  return total?.toFixed(2);
};



export function setSmoothScrool() {
  window.addEventListener('scroll', function () {
    const elt = document.querySelector('.linkToHome') as HTMLElement;
    if (window.scrollY > 500) {
      elt.style.right = '30px';
    } else {
      elt.style.right = '-47px';
    }
  });
}