import React, {useState} from 'react'
import card from '../../../images/card1.jpg'
import pepper from '../../../images/pepper.svg'
import vegan from '../../../images/vegan.svg'
import CardInfo from './CardInfo'


const Card = () => {
    const [toggleBtn, setToggleBtn] = useState<boolean>(true);
    const [toggleInfo, setToggleInfo] = useState<boolean>(false);
  return (
      <div className="card products__card">
          <div className="card__header">
              <img src={card} alt="" className="card__img" />
          </div>
          <div className="card__body">
              <h5 className="card__title">Pizza Bianca</h5>
              <div className="card__icons">
                  <img className="card__icon" src={pepper} alt="pepper" title='Spice' />
                  <img className="card__icon" src={vegan} alt="vegan" title='Vegetarian' />
                  <CardInfo setToggleInfo={setToggleInfo} toggleInfo={toggleInfo} />
              </div>
              <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
              <div className="card__price">$13.99</div>
              
              {toggleBtn ? (<button className="card__btn" onClick={() => setToggleBtn(false)}>
                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                  <span>add to card</span>
              </button>) : (
                  <button className="card__counter">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                  </button>
              )}
              
          </div>
      </div>
  )
}

export default Card