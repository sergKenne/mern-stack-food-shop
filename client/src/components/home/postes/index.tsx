import React from 'react';

import post1 from '../../../images/post1.jpg';
import post2 from '../../../images/post2.jpg';
import post3 from '../../../images/post3.jpg';

const Postes = () => {
  return (
    <section className="post">
      <div className="container">
        <h6 className="post__title">BLOG POSTS</h6>
        <ul className="post__list">
          <li className="post__item">
            <a href="#" className="post__link">
              <img src={post1} alt="" className="post__img" />
            </a>
            <p className="post__date">APRIL 1, 2019</p>
            <p className="post__subtitle">
              Few quips galvanized the mock jury box
            </p>
            <p className="post__description">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog.
            </p>
            <span className="post__read-more">Continue Reading</span>
          </li>
          <li className="post__item">
            <a href="#" className="post__link">
              <img src={post2} alt="" className="post__img" />
            </a>
            <p className="post__date">APRIL 1, 2019</p>
            <p className="post__subtitle">
              A quick movement of the enemy will jeopardize six gunboats
            </p>
            <p className="post__description">
              My faxed joke won a pager in the cable TV quiz show.
            </p>
            <span className="post__read-more">Continue Reading</span>
          </li>
          <li className="post__item">
            <a href="#" className="post__link">
              <img src={post3} alt="" className="post__img" />
            </a>
            <p className="post__date">APRIL 1, 2019</p>
            <p className="post__subtitle">
              Brawny gods just flocked up to quiz and vex him
            </p>
            <p className="post__description">
              The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens
              fight for a quick jump.
            </p>
            <span className="post__read-more">Continue Reading</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Postes;
