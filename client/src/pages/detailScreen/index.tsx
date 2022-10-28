import React from 'react'

import card from '../../images/bigBurger.jpg'

const Detail = () => {
  return (
    <div className="detail">
      <div className="container">
        <div className="detail__content">
          <div className="detail__picture">
            <img src={card} alt="" className="detail__img" />
          </div>
          <div className="detail__info">
            <div className="card detail__card">
              <div className="card__body">
                <p className="card__description card__description--detail"><span>Home - </span><span>Shop</span></p>
                <h5 className="card__title card__title--detail">Pizza Bianca</h5>
                <p className="card__description">Tomato Sauce · Mozzarella · Chicken · Beef · Pepperoni · Onions · Rosemary</p>
                <h5 className="card__title">Description:</h5>
                <p className="card__description card__description--info">Vestibulum diam urna, maximus at facilisis sed, laoreet ac diam. Sed dignissim placerat turpis eget posuere. Nam ullamcorper sodales eros nec ultrices. Maecenas neque leo, eleifend aliquam enim eu, pretium consectetur nisl. Maecenas sagittis hendrerit dui, at pharetra elit lacinia sit amet. Nam</p>
                <div className="card__price card__price--detail">$13.99</div>
                <div className="detail__btn">
                  <button className="detail__counter">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </button>
                  <button className="card__btn card__btn--detail">
                    <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                    <span>Add to card</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail