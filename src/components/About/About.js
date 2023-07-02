import React from "react";
import "./styles.scss";
import { images } from "../../constants";
import { AiOutlineSafetyCertificate, AiOutlineTrophy } from "react-icons/ai";
import { PiConfettiLight } from "react-icons/pi";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h1 className="top-heading">During the trip We guarantee!</h1>
        <div className="about__top">
          <div className="about__top-card">
            <AiOutlineSafetyCertificate className="about-icon" />
            <h2>Safe trip</h2>
            <p>
              psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about__top-card">
            <AiOutlineTrophy className="about-icon" />
            <h2>The best hotels</h2>
            <p>
              psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about__top-card">
            <PiConfettiLight className="about-icon" />
            <h2>The best entertainment </h2>
            <p>
              psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <h1>About Us</h1>
        <div className="about-container">
          <div className="about-content">
            <h2>Welcome to our website</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="btn">Learn more</button>
          </div>
          <div className="about-img">
            <img src={images.a1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
