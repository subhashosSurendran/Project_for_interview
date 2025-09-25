"use client";
import React, { useState } from 'react';
import '../custom_scss/accordion.scss';

const faqData = [
  {
    question: 'What is your favorite template from BRIX Templates?',
    answer:
      'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
  },
  {
    question: 'What is your favorite template from BRIX Templates?',
    answer: 
          'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',

  },
  {
    question: 'What is your favorite template from BRIX Templates?',
    answer: 
          'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',

  },
  {
    question: 'What is your favorite template from BRIX Templates?',
    answer: 
          'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',

  },
];

const CryptoFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className='main_button_section'>
    <div className="crypto-faq-container">
      <div className="crypto-faq-header">
        <h2>Most Trusted Cryptocurrency Platform</h2>
        <p>
          Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu arcu aliquet laoreet blandit.
          Nam velit euismod egestas in. Sed purus.
        </p>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span className="icon">{openIndex === index ? '−' : '+'}</span>
              {item.question}
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CryptoFAQ;
