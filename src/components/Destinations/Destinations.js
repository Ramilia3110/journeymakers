import React from "react";
import "./styles.scss";
import { images } from "../../constants";
import { AiTwotoneStar } from "react-icons/ai";

const Destinations = () => {
  return (
    <div className="destinations" id="destinations">
      <div className="container">
        <h2 className="destinations__title">Best trip package</h2>
        <p className="destinations__subtitle">
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </p>
        <div className="trip__grid">
          <div className="trip__card">
            <div className="trip__card-img">
              <img src={images.d1} alt="trip" />
            </div>

            <div className="trip__details">
              <p>Wasserwerk Frelberg, Germany</p>
              <div className="rating">
                <AiTwotoneStar className="star" />
                4.2
              </div>
              <div className="booking__price">
                <div className="price">
                  <span>From</span> $300
                </div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <div className="trip__card-img">
              <img src={images.d2} alt="trip" />
            </div>
            <div className="trip__details">
              <p>Patagonia, Argentina and Chile</p>
              <div className="rating">
                <AiTwotoneStar className="star" />
                4.5
              </div>
              <div className="booking__price">
                <div className="price">
                  <span>From</span> $450
                </div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <div className="trip__card-img">
              <img src={images.d3} alt="trip" />
            </div>
            <div className="trip__details">
              <p>The Dolomites, Italy</p>
              <div className="rating">
                <AiTwotoneStar className="star" />
                4.7
              </div>
              <div className="booking__price">
                <div className="price">
                  <span>From</span> $400
                </div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="view__all">
          <button className="btn ">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
