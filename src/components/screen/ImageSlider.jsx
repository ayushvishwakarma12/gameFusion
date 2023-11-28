import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImages } from "../../utils/images";
import styled from "styled-components";

const ImageSlider = () => {
  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <ImageSliderWrapper>
      <Slider {...settings} className="game-slider">
        {sliderImages.map((image, idx) => (
          <div className="slider-item" key={idx}>
            <img src={image} className="slider-item-img " />
          </div>
        ))}
      </Slider>
    </ImageSliderWrapper>
  );
};

export default ImageSlider;

const ImageSliderWrapper = styled.div`
  background-color: #050415;
  padding: 100px;

  .game-slider {
    .slider-item {
      height: 300px;
      padding: 16px;
      outline: 0;
    };
    @media screen and (max-width: 768px) {
      .slider-item {
        height:200px;
      }
    }

      img {
        border: 6px solid #0584FC;
        height: 280px;
      }
      @media screen and (max-width: 768px) {
        img {
          height: 200px;
        }
      }
    }

    .slick-list {
      padding-top: 110px !important;
      padding-bottom: 110px !important;
    }

    .slick-dots {
      li {
        height: 10px;
        width: 80px;
        border-radius: 10px;
        button {
          &::before {
            width: 100% !important;
            height: 100% !important;
            border: 2px solid blue;
            color: unset;
            transition: ease-in-out;
            border-radius: 10px;
          }
        }

        &.slick-active {
          background-color: #0584FC //#BD46DA;
        }
      }
    }

    .slick-center {
      transform: scale(1.5);
    }

    .slick-prev {
      position: absolute;
      left: -50px !important;
      z-index: 5;
      transform: scale(1.4);
    }

    .slick-next {
      position: absolute;
      right: -50px !important;
      z-index: 5;
      transform: scale(1.4);
    }
  }
`;
