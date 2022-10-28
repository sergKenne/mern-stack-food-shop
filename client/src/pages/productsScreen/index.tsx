import React from 'react'


import card from '../../images/card1.jpg'

const Products = () => {

    

  return (
      <div className="products">
          <div className="container">
              <ul className="products__breadcrumb">
                  <li className="products__b-item">Home</li>
                  <li className="products__b-item">Shop</li>
                  <li className="products__b-item">Steack</li>
              </ul>
              <h1 className="products__title">Steack</h1>
              <div className="products__inner">
                  <div className="products__filter">
                   <div>
                     <div className="products__filter-content">
                        <h4 className="products__filter-title">Filter by price</h4>
                        <div className="range">
                                  
                            
                        </div>
                     </div>
                   </div>
                  </div>
                  <div className="products__items">
                      <div className="card products__card">
                          <div className="card__header">
                              <img src={card} alt="" className="card__img"/>
                          </div>
                          <div className="card__body">
                              <h5 className="card__title">Pizza Bianca</h5>
                              <div className="card__icons">
                                  <img className="card__icon" src="images/vegan.svg" alt=""/>
                                      <span>
                                          <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                      </span>
                              </div>
                              <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                              <div className="card__price">$13.99</div>
                              <button className="card__btn">
                                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                  <span>add to card</span>
                              </button>
                          </div>
                      </div>
                      <div className="card products__card">
                          <div className="card__header">
                              <img src={card} alt="" className="card__img"/>
                          </div>
                          <div className="card__body">
                              <h5 className="card__title">Pizza Bianca</h5>
                              <div className="card__icons">
                                  <img className="card__icon" src="images/vegan.svg" alt=""/>
                                      <span>
                                          <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                      </span>
                              </div>
                              <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                              <div className="card__price">$13.99</div>
                              <button className="card__btn">
                                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                  <span>add to card</span>
                              </button>
                          </div>
                      </div>
                      <div className="card products__card">
                          <div className="card__header">
                              <img src={card} alt="" className="card__img"/>
                          </div>
                          <div className="card__body">
                              <h5 className="card__title">Pizza Bianca</h5>
                              <div className="card__icons">
                                  <img className="card__icon" src="images/vegan.svg" alt=""/>
                                      <span>
                                          <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                      </span>
                              </div>
                              <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                              <div className="card__price">$13.99</div>
                              <button className="card__btn">
                                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                  <span>add to card</span>
                              </button>
                          </div>
                      </div>
                      <div className="card products__card">
                          <div className="card__header">
                              <img src={card} alt="" className="card__img"/>
                          </div>
                          <div className="card__body">
                              <h5 className="card__title">Pizza Bianca</h5>
                              <div className="card__icons">
                                  <img className="card__icon" src="images/vegan.svg" alt=""/>
                                      <span>
                                          <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                      </span>
                              </div>
                              <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                              <div className="card__price">$13.99</div>
                              <button className="card__btn">
                                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                  <span>add to card</span>
                              </button>
                          </div>
                      </div>
                      <div className="card products__card">
                          <div className="card__header">
                              <img src={card} alt="" className="card__img"/>
                          </div>
                          <div className="card__body">
                              <h5 className="card__title">Pizza Bianca</h5>
                              <div className="card__icons">
                                  <img className="card__icon" src="images/vegan.svg" alt=""/>
                                      <span>
                                          <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                      </span>
                              </div>
                              <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                              <div className="card__price">$13.99</div>
                              <button className="card__btn">
                                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                  <span>add to card</span>
                              </button>
                          </div>
                      </div>
                      <div className="card products__card">
                          <div className="card__header">
                              <img src={card} alt="" className="card__img"/>
                          </div>
                          <div className="card__body">
                              <h5 className="card__title">Pizza Bianca</h5>
                              <div className="card__icons">
                                  <img className="card__icon" src="images/vegan.svg" alt=""/>
                                      <span>
                                          <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                      </span>
                              </div>
                              <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                              <div className="card__price">$13.99</div>
                              {/* <button className="card__btn">
                                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                  <span>add to card</span>
                              </button> */}

                              <button className="card__counter">
                                  <span>-</span>
                                  <span>1</span>
                                  <span>+</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Products