import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";




export default function ProductDetails() {

    const [product, setproduct] = useState(null)




 var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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




    let {id} = useParams()
    // console.log(id)
    function getProduct(id){

        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then((res)=>{
                console.log(res.data.data)
                setproduct(res.data.data)


            })
            .catch((err)=>{
                console.log(err)
            })




        
    }

    useEffect(() => {
  getProduct(id)
    
      
    }, [])
    











   return (
   <>
   
   

   <div className="max-w-4xl mx-auto p-6  ">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        
    
        <div className="md:w-1/2 w-full">

<Slider {...settings}>
 {product?.images.map((src)=> <img src={src} alt=""  className="object-cover w-[75%]" /> )}

 </Slider>

        
           
       
        
        </div>

  
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-emerald-600 mb-2">{product?.title}</h2>
          <p className="text-gray-700 text-sm mb-4">{product?.description}</p>
          {/* <p className="text-lg font-semibold text-gray-800">{product?.price} EGP</p> */}
          <div className=" flex justify-evenly pt-2.5 ">
        <span>{product?.price} EGP</span>
        <span>{product?.ratingsAverage}<i className='fas fa-star text-yellow-500 pt-1'></i></span>
  </div>
  <button 
   className='mt-4 bg-emerald-500 cursor-pointer text-white font-semibold py-2 px-4 rounded hover:bg-emerald-600 transition-all duration-300'>Add To Cart</button>
        </div>
       

      </div>
      
       
 
    </div>

   
   
   </>
  )
}
