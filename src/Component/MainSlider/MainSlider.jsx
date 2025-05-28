import React from 'react'
import Slider from "react-slick";
import slider1 from "../../assets/slider-image-1.jpeg"
import slider2 from "../../assets/slider-image-2.jpeg"
import slider3 from "../../assets/slider-image-3.jpeg"
import slider4 from "../../assets/slider-2.jpeg"
import slider5 from "../../assets/grocery-banner-2.jpeg"

export default function MainSlider() {


 var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    centerPadding:'100',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  
  };






  return (
 <>
 

<div className="row mb-5 " >

<div className="right w-1/2">


<Slider {...settings}>
    <img src={slider1} alt="" className=' w-full h-[400px] object-fill ' />
    <img src={slider4} alt="" className=' w-full h-[400px] object-fill ' />
    <img src={slider5} alt="" className=' w-full h-[400px] object-fill ' />


   </Slider> 



</div>
<div className="left w-1/4">
<img src={slider2} alt=""  className=' w-full h-[200px] object-cover '/>
<img src={slider3} alt="" className=' w-full h-[200px] object-cover ' />

</div>



</div>





   
 
 
 
 
 
 </>
  )
}
