"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    "image": "https://quiz.gamebd.xyz/media/images/news/0234fd7d62474cada91e88ccb5494136.jpg",
    "title": "Bkash DHamaka",
    "subtitle": "bkash"
  },
  {
    "image": "https://quiz.gamebd.xyz/media/images/news/02d0e43357fe4e9c8e77d5df55a83fef.png",
    "title": "Exclusive Tournament",
    "subtitle": "Exclusive Tournament"
  },
  {
    "image": "https://quiz.gamebd.xyz/media/images/news/cd814c7794314e4b88149d87cf7be872.png",
    "title": "Robi Premium",
    "subtitle": "Robi Premium"
  },
  {
    "image": "https://quiz.gamebd.xyz/media/images/news/0234fd7d62474cada91e88ccb5494136.jpg",
    "title": "Exclusive Tournament",
    "subtitle": "Exclusive Tournament"
  },
  {
    "image": "https://quiz.gamebd.xyz/media/images/news/3cbb9dab16044089ba22d0552f5ae2f8.png",
    "title": "Winner of this Week",
    "subtitle": "Last Week's Winner"
  },
  {
    "image": "https://quiz.gamebd.xyz/media/images/news/0234fd7d62474cada91e88ccb5494136.jpg",
    "title": "Bkash DHamaka",
    "subtitle": "bkash"
  }
];

const FeatureSliderComp = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-2">
            <div className="">
              <img
                src={item.image}
                alt={item.title}
                className="w-[366px] h-[236px] object-cover rounded-lg"
              />
              
            </div>
            <div className=" py-2">
                <h3 className="bg-[#DC3545] w-fit text-sm text-white font-semibold px-1">{item.title}</h3>
                <p className='font-bold text-lg'>{item.subtitle}</p>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSliderComp;
