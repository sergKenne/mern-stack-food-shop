import React, {useState} from 'react'
import pepper from '../../../images/pepper.svg'
import vegan from '../../../images/vegan.svg'
import CardInfo from './CardInfo'
import { CardProps } from './type'


const Card = ({product}:CardProps) => {
    const [toggleBtn, setToggleBtn] = useState<boolean>(true);
    const [toggleInfo, setToggleInfo] = useState<boolean>(false);
    console.log(product);
    const {img, info, name, ingredients, price, addClass, composition} = product
   return (
       <div className={`card ${addClass}`}>
          <div className="card__header">
              <img src={img} alt="" className="card__img" />
          </div>
          <div className="card__body">
               <h5 className="card__title">{name}</h5>
              <div className="card__icons">
                   {composition?.isPerpper && <img className="card__icon" src={pepper} alt="pepper" title='Spice' />}
                   {composition?.isVegan && <img className="card__icon" src={vegan} alt="vegan" title='Vegetarian' />}
                   {info && <CardInfo info={info} setToggleInfo={setToggleInfo} toggleInfo={toggleInfo} />}
              </div>
               <p className="card__description">
                   {ingredients.map(el => <span key={el}>{"   ·  "}{el}</span>)}
               </p>
               <div className="card__price">${ price}</div>
        
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