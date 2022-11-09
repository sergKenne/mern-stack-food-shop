import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import pepper from '../../../images/pepper.svg'
import vegan from '../../../images/vegan.svg'
import CardInfo from './CardInfo'
import { CardProps } from './type'


const Card = ({product}:CardProps) => {
    const [toggleBtn, setToggleBtn] = useState<boolean>(true);
    const [toggleInfo, setToggleInfo] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(1)
    //console.log(product);
    const {img, category, id, info, name, ingredients, price, addClass, composition} = product
   return (
       <div className={`card ${addClass}`}>
           <div className="card__header">
               <Link to={`/shop/${category}/${id}`}>
                   <img src={img} alt="" className="card__img" />
               </Link>
          </div>
          <div className="card__body">
               <Link to={`/shop/${category}/${id}`}><h5 className="card__title">{name}</h5></Link>
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
                        <span onClick={()=>setCounter(prevState => prevState - 1)}>-</span>
                        <span>{ counter }</span>
                        <span onClick={() => setCounter(prevState => prevState + 1)}>+</span>
                  </button>
              )}
              
          </div>
      </div>
  )
}

export default Card