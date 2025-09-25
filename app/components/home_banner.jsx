import "../custom_scss/home_banner.scss";
import React from "react";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="overlay">
        <div className="banner-content">
          <h1>
            Ultrices ut etiam vulputate ante congue <br />
            jokichn na <span>Lorem Ipsum</span>
          </h1>

          <div className="banner-buttons">
            <button className="btn primary">Learn More</button>
            <button className="btn secondary">Watch Video</button>
          </div>
        </div>

        {/* Floating Labels */}
      </div>
    </section>
  );
};

export default HomeBanner;
