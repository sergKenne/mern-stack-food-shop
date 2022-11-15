import React from 'react';

import personnel1 from '../../../images/personal1.jpg';
import personnel2 from '../../../images/personal2.jpg';
import personnel3 from '../../../images/personal3.jpg';

const Personnels = () => {
  return (
    <section className="personals">
      <div className="container">
        <h5 className="personals__title">TESTIMONIALS</h5>
        <div className="personals__slider">
          <div className="personals-slider">
            <div className="personals__slide-item">
              <div className="personals__slide-inner">
                <p className="personals__slide-description">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  <br /> MTV ax quiz prog.
                </p>
                <img src={personnel1} alt="" className="personals__slide-img" />
                <span className="personals__slide-name">Charlize Theron</span>
              </div>
            </div>
            <div className="personals__slide-item">
              <div className="personals__slide-inner">
                <p className="personals__slide-description">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  <br /> MTV ax quiz prog.
                </p>
                <img src={personnel2} alt="" className="personals__slide-img" />
                <span className="personals__slide-name">Charlize Theron</span>
              </div>
            </div>
            <div className="personals__slide-item">
              <div className="personals__slide-inner">
                <p className="personals__slide-description">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  <br /> MTV ax quiz prog.
                </p>
                <img src={personnel3} alt="" className="personals__slide-img" />
                <span className="personals__slide-name">Charlize Theron</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personnels;
