import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";









export default function CategorySlider() {
    const [Categories, setcategories] = useState([]) ;


     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    centerPadding:'100',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
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
  
  };


function getGategory(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    .then((res)=>{
        // console.log(res.data.data)
        setcategories(res.data.data)

    })
    .catch((err)=>{
console.log(err)

    })
}

useEffect(() => {
  
getGategory()
  
}, [])












  return (
   <>
   <h2 className='text-gray-600 capitalize my-2 font-bold'>Shop Popular Categories</h2>
   
    <Slider {...settings} className='mx-40'>
      {Categories.map((category)=>
        <div >
            <img src={category.image} className='w-full h-[220px] object-cover' alt="" />
            <h4>{category.name}</h4>
        </div>
   )}
    </Slider>
   

   
   
   </>
  )
}
