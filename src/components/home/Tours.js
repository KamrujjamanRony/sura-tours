import React from "react";

const Tours = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-mb-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__img card__img--1">&nbsp;</div>
              <div className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The sea explorer
                </span>
              </div>
              <div className="card__details">
                <ul>
                  <li>2 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <div className="card__price-only">Only</div>
                  <div className="card__price-value">$297</div>
                </div>
                <a href="#popup" className="btn btn--white">Book now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__img card__img--2">&nbsp;</div>
              <div className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  The forest hiker
                </span>
              </div>
              <div className="card__details">
                <ul>
                  <li>7 day tour</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided $897</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <div className="card__price-only">Only</div>
                  <div className="card__price-value">$497</div>
                </div>
                <a href="#popup" className="btn btn--white">Book now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__img card__img--3">&nbsp;</div>
              <div className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The snow adventurer
                </span>
              </div>
              <div className="card__details">
                <ul>
                  <li>5 day tour</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <div className="card__price-only">Only</div>
                  <div className="card__price-value">$897</div>
                </div>
                <a href="#popup" className="btn btn--white">Book now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-mt-huge">
      <a href="#" className="btn btn--primary">Discover all tours</a>
      </div>
    </section>
  );
};

export default Tours;
