import React from "react";
import "../custom_scss/most _trusted_section.scss";
import Image from "next/image";
import cryptoImage from "../images/Rectangle 4483.png"

const CryptoSection = () => {
  
  return (
    <section className="crypto-section">
      <div className="container">
        <h2 className="title">Most Trusted Cryptocurrency Platform</h2>
        <p className="subtitle">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
          arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus.
        </p>

        <div className="image-row">
          <div className="image-card">
            <Image src={cryptoImage} alt="Crypto Trading" width={200} height={120} />
          </div>
          <div className="image-card">
            <Image src={cryptoImage} alt="Crypto Trading" width={200} height={120} />
          </div>
          <div className="image-card">
            <Image src={cryptoImage} alt="Crypto Trading" width={200} height={120} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
