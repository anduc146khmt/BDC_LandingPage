import React from 'react';
import './style.scss';

const Stat = (props) => {
  return (
    <div>
      <section className="ourStats" id="ourStats">
        <div className="ourStats__content">
          <div className="ourStats__text">
            <h1 className="mainheading">OUR TEAM</h1>
            <p className="subheading">When climbing the career ladder</p>
          </div>
          <div className="ourStats__item container">
            <div className="row d-flex justify-content-around">
              <div className="ourStats__item__tag col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <i className="fa fa-user" />
                <h3>Members</h3>
                <p className="counter">45</p>
              </div>
              <div className="ourStats__item__tag col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <i className="fa fa-users" />
                <h3>Executed Board</h3>
                <p className="counter">24</p>
              </div>
              <div className="ourStats__item__tag col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <i className="fa fa-graduation-cap" />
                <h3>Professors</h3>
                <p className="counter">10</p>
              </div>
              <div className="ourStats__item__tag col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <i className="fa fa-trophy" />
                <h3>Projects</h3>
                <p className="counter">10</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
