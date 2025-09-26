"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom_scss/card_section.scss";
import Image from "next/image";
import PersonOne from "../images/Rectangle 4476.png";
import PersonTwo from "../images/person2.png";
import PersonThree from "../images/person3.png"
import PersonFour from "../images/person4.png"

const CardSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '10px',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 1000,      
    initialSlide: 0, // Add this line
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="card">
        <Image
          src={PersonOne}
          alt="Person 1"
          className="card__image"
          width={200}
          height={120}
        />
        <div className="card__content">
          <h3 className="card__title">Lorem ipsum dolor</h3>
          <p className="card__title_sub">Lorem ipsum dolor</p>
          <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
          <p className='card__content_sub'> Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.  </p>
        </div>
      </div>

      <div className="card">
        <Image
          src={PersonTwo}
          alt="Person 2"
          className="card__image"
          width={200}
          height={120}
        />
        <div className="card__content">
          <h3 className="card__title">Lorem ipsum dolor</h3>
          <p className="card__title_sub">Lorem ipsum dolor</p>
          <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                 <p className='card__content_sub'> Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.  </p>

        </div>
      </div>

      <div className="card">
        <Image
          src={PersonThree}
          alt="Person 3"
          className="card__image"
          width={200}
          height={120}
        />
        <div className="card__content">
          <h3 className="card__title">Lorem ipsum dolor</h3>
          <p className="card__title_sub">Lorem ipsum dolor</p>
          <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                  <p className='card__content_sub'> Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.  </p>

        </div>
      </div>

      <div className="card">
        <Image
          src={PersonFour}
          alt="Person 4"
          className="card__image"
          width={200}
          height={120}
        />
        <div className="card__content">
          <h3 className="card__title">Lorem ipsum dolor</h3>
          <p className="card__title_sub">Lorem ipsum dolor</p>
          <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                 <p className='card__content_sub'> Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.  </p>

        </div>
      </div>

       <div className="card">
        <Image
          src={PersonOne}
          alt="Person 1"
          className="card__image"
          width={200}
          height={120}
        />
        <div className="card__content">
          <h3 className="card__title">Lorem ipsum dolor</h3>
          <p className="card__title_sub">Lorem ipsum dolor</p>
          <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
          <p className='card__content_sub'> Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.  </p>
        </div>
      </div>

      <div className="card">
        <Image
          src={PersonTwo}
          alt="Person 2"
          className="card__image"
          width={200}
          height={120}
        />
        <div className="card__content">
          <h3 className="card__title">Lorem ipsum dolor</h3>
          <p className="card__title_sub">Lorem ipsum dolor</p>
          <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                 <p className='card__content_sub'> Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.  </p>

        </div>
      </div>
    </Slider>
  );
};

export default CardSlider;
