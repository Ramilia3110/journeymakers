import React from "react";
import Header from "./../Header/Header";
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import { images } from "../../constants";
import "./styles.scss";

export function Cover() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="cover">
      <div className="container">
        <div className="cover-top">
          <h1 className="cover-text"> Istanbul with Love!</h1>
          <div className="cover-search">
            <input type="text" placeholder="Type the name of the place" />
            <button className="search-btn btn">Search</button>
          </div>
        </div>
        <div className="cover-bottom">
          <AiOutlineStepBackward id="backBtn" onClick={slideLeft} />
          <div className="gallery" id="slider">
            <div>
              <span>
                <img src={images.c1} />
              </span>
              <span>
                <img src={images.c4} />
              </span>
              <span>
                <img src={images.c7} />
              </span>
              <span>
                <img src={images.c6} />
              </span>
            </div>
            <div>
              <span>
                <img src={images.c5} />
              </span>
              <span>
                <img src={images.c2} />
              </span>
              <span>
                <img src={images.c8} />
              </span>
              <span>
                <img src={images.c3} />
              </span>
            </div>
          </div>
          <AiOutlineStepForward id="nextBtn" onClick={slideRight} />
        </div>
      </div>
    </div>
  );
}
