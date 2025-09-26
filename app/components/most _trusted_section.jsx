"use client";
import React, { useState } from "react";
import "../custom_scss/most _trusted_section.scss";
import Image from "next/image";
import cryptoImage from "../images/Rectangle 4483.png";

const hoverContents = [
  { heading: "Millions Trust Us", text: "Trusted by millions. Start trading now!" },
  { heading: "Fast & Secure", text: "Secure and fast transactions for everyone." },
  { heading: "Future Finance", text: "Join the future of finance with us!" }
];

const CryptoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="crypto-section">
      <div className="container">
        <h2 className="title">Most Trusted Cryptocurrency Platform</h2>
        <p className="subtitle">
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
          arcu aliquet laoreet blandit. Nam velit euismod egestas in. Sed purus.
        </p>

        <div className="image-row">
          {[0, 1, 2].map((idx) => (
            <div
              className="image-card"
              key={idx}
              style={{ position: "relative" }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image src={cryptoImage} alt="Crypto Trading" width={200} height={120} />
              <div
                className={`hover-content${hoveredIndex === idx ? " show" : ""}`}
              >
                <h4>{hoverContents[idx].heading}</h4>
                <p>{hoverContents[idx].text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
