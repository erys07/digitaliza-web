import React, { Component } from "react";
import Slider from "react-slick";

import  img1  from "../assets/TA-141w (1) 1.svg"
import  img2  from "../assets/Logo+Mar+Vermelho-158w 1.svg"
import  img3  from "../assets/Major-153w 1.svg"
import  img4  from "../assets/OAF-62284662-152w (1) 1.svg"
import  img5  from "../assets/SI-d556a44c-124w 1.svg"

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
      <Slider {...settings}>

        <div className='img-1'>
        <img src={img1} className="img1"></img>
        </div>

        <div className='img-2'>
        <img src={img2} className="img2"></img>
        </div>

        <div className='img-3'>
        <img src={img3} className="img3"></img>
        </div>

        <div className='img-4'>
        <img src={img4} className="img4"></img>
        </div>

        <div className='img-5'>
        <img src={img5} className="img5"></img>
        </div>

        <div className='img-1'>
        <img src={img1} className="img1"></img>
        </div>

        <div className='img-2'>
        <img src={img2} className="img2"></img>
        </div>
      </Slider>
    </div>
    )
  }
};
