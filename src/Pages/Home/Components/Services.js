import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Homestyles.css"

import img1 from '../../../Assets/sliderimg1.jpg';
import img2 from '../../../Assets/sliderimg2.jpg';
import img3 from '../../../Assets/sliderimg3.jpg';
import img4 from '../../../Assets/sliderimg4.jpg';
import img5 from '../../../Assets/sliderimg5.jpg';

const Services = () => {

  const images = [img1, img2, img3, img4, img5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <>
      <h1 className='Heading'>Services</h1>
      <section className="services">
        <Slider {...settings}>
          {
            images.map((image) => {
              return (
                <div>
                  <img src={image} alt="" />
                </div>
              )
            })
          }


          {/* <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={img4} alt="" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div> */}


        </Slider>
      </section>
    </>
  )
}

export default Services