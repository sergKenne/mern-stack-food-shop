import React from 'react';
import { CardInfoProps } from './type';

const CardInfo = ({ setToggleInfo, toggleInfo, info }: CardInfoProps) => {
  return (
    <span className="card__info">
      {toggleInfo && (
        <div className="card__info-inner">
          <svg
            className="card__info-close"
            onClick={() => setToggleInfo(false)}
          >
            <use xlinkHref="#svg-close-round"></use>
          </svg>
          <h4 className="card__info-title">Nutritinal facts</h4>
          <ul className="card__info-list">
            <li className="card-info-item">Serving Size 1 slice(63 g)</li>
            <li className="card-info-item">Per Serving:</li>
            <li className="card-info-item">Carlories {info.calories}</li>
            <li className="card-info-item">Total Fat - {info.totalFat}g</li>
            <li className="card-info-item">
              Carbohydrates - {info.carbohydrates}g
            </li>
            <li className="card-info-item">Protein - {info.protein}g</li>
          </ul>
        </div>
      )}
      <svg
        className="card__icon"
        onClick={() => setToggleInfo((prevState) => !prevState)}
      >
        <use xlinkHref="#svg-info"></use>
      </svg>
    </span>
  );
};

export default CardInfo;
