import React from 'react'
import { CardProps } from './type'

const CardInfo = ({setToggleInfo, toggleInfo}:CardProps) => {
  return (
      <span className='card__info'>
          {toggleInfo && (
            <div className='card__info-inner'>
                <svg className="card__info-close" onClick={()=>setToggleInfo(false)}>
                    <use xlinkHref="#svg-close-round"></use>
                </svg>
                <h4 className='card__info-title'>Nutritinal facts</h4>
                <ul className="card__info-list">
                    <li className="card-info-item">Serving Size 1 slice(63 g)</li>
                    <li className="card-info-item">Per Serving:</li>
                    <li className="card-info-item">Carlories {168}</li>
                    <li className="card-info-item">Total Fat - {4.7}g</li>
                    <li className="card-info-item">Carbohydrates - {20.4}g</li>
                    <li className="card-info-item">Protein - {7.6}g</li>
                </ul>
            </div>
          )}
          <svg className="card__icon" onClick={() => setToggleInfo(prevState => !prevState)}>
            <use xlinkHref="#svg-info"></use>
          </svg>
      </span>
  )
}

export default CardInfo