import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAboutPics } from "../utils/data";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[320px] object-contain">
      <Slider {...settings}>
        {getAboutPics().length === 0 ? (
          <p>No pictures to show.</p>
        ) : (
          getAboutPics().map((img) => (
            <div>
              <img src={img.url} alt="about" className="m-auto w-64 sm:w-full h-auto object-contain rounded-3xl" />
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
