"use client";
import "../custom_scss/home_banner.scss";
import React from "react";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="overlay">
        <div className="banner-content">
          <h1>
            Ultrices ut etiam vulputate ante congue <br />
            jokichn na{" "}
            <span className="rotating-text-container">
              <span className="rotating-text">
                <span>Lorem Ipsum</span>
                <span>Dolor Sit Amet</span>
                <span>Lorem Ipsum</span> {/* repeat first for seamless loop */}
              </span>
            </span>
          </h1>

          <div className="banner-buttons">
            <button className="btn primary">Learn More</button>
            <button className="btn secondary">Watch Video</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
