import React from 'react';
import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../../public/Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 150000</p>
              <span className="kilometer">Smart Phone</span>
              <p className="name"> Iphone 14 Pro</p>
            </div>
            <div className="date">
              <span>Tue Jan 24 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsco7Ms_jmHc47D_VZ2iYvMmcmIZbru6O4_bwtrd7hXVNVQlxxtzs2xQnY4iCIdQPh00vUzWnSE-EXUEvQ8xjRDEQEe7yJ" alt="Image not available" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 150000</p>
              <span className="kilometer">Smart Phone</span>
              <p className="name">Iphone 14 Pro</p>
            </div>
            <div className="date">
              <span>24/01/2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
