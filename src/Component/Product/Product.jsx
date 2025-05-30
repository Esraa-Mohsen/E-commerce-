import React, { useContext } from 'react'
import useProduct from '../../Hooks/useProduct'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext/CartContext';




export default function Product() {
   let {addToCart} = useContext(CartContext)

let {data} = useProduct()

async function addProductToCart(id) {
 let response = await addToCart(id)
  // console.log(response.data)

if (response.status == "success") {

toast(response.message , {icon: '✅' } )

}else {

  toast(response.message , {icon : '❌'})
  
}



}




  return (
<>

<div className="row w-[90%] m-auto ">

{ data?.data?.data?.length > 0 ?  
data?.data?.data?.filter(Boolean).map((product)=> <div key={product.id} className='w-52 m-4 p-4 bg-white shadow-md'>
<div className="product">

<Link to={`/ProductDetails/${product?.id}`}>      

    <img src={product.imageCover} alt="" className='w-full h-56 object-cover' />
    <h3 className='text-emerald-500'>{product?.category?.name}</h3>
    <h3 className='font-semibold'>{product?.title?.split(" ").slice(0,2).join(" ")}</h3>
    <div className="rating flex justify-between">
        <span>{product?.price} EGP</span>
        <span>{product?.ratingsAverage}<i className='fas fa-star text-yellow-500 pt-1'></i></span>
  </div>
</Link>
       
  
     <button onClick={()=>addProductToCart(product.id)}
     className='mt-4 bg-emerald-500 cursor-pointer text-white font-semibold py-2 px-4 rounded hover:bg-emerald-600 transition-all duration-300'>Add To Cart</button>



</div>

</div>)  : <div className="sk-chase mt-52">
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
</div>
}


</div>

</>
  )
}
