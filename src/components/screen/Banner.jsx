import ReactSimplyCarousel from "react-simply-carousel";

import React from "react";
import Slider from "react-slick";

import banner from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [banner, banner2, banner3, banner4];

const Banner = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 2,
    slideToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <Slider
        {...setting}
        autoplaySpeed={5000}
        fade={true}
        autoplay={true}
        easing="linear"
      >
        {imageList.map((eachImage) => {
          return (
            <div>
              <div
                className="min-h-[600px] bg-cover bg-center"
                style={{
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url('${eachImage}')`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-left pl-10 pt-10 md:pl-16 md:pt-32">
                  <h1 className="font-poppins font-bold text-4xl md:text-5xl tracking-widest text-white">
                    <span className="text-[60px] md:text-[80px] text-cyan-200 ">
                      W
                    </span>
                    elcome to GameZone
                  </h1>
                  <p className="font-mono text-lg font-semibold text-[#F2F3F5] mt-10 w-4/5 md:w-3/5 text-left">
                    - Your Gateway to Gaming Excellence! Dive into the immersive
                    world of gaming with us. Discover the latest games, read
                    insightful reviews, stay updated on gaming news, and connect
                    with fellow gamers. Whether you're a casual player or a
                    hardcore enthusiast, GameZone is your one-stop destination
                    for all things gaming. Join us on this epic journey and
                    level up your gaming experience today!
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Banner;