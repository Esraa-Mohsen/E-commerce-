import axios from "axios";
import { createContext } from "react";



export let CartContext =createContext() ;

export default function CartContextProvider(props){


let headers = {token : localStorage.getItem("userToken") , }


function addToCart(productId){

  return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId : productId} , {headers} )
    .then((res)=> {
        console.log(res.data)
         console.log(productId)
        return res.data
    } )
    .catch((err)=> {console.log(err.response?.data || err.message)

       throw err
    } )

}


function getCart(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {headers})
    .then((res)=>res)
    .catch((err)=>err)
}


function updateProductQuantity(productId , newCount){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,  {count:newCount} ,{headers})
    .then((res)=>res)
    .catch((err)=>err)
}
function deleteProduct (productId) {
     return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers} )
     .then((res)=>res)
    .catch((err)=>err)
}




    return <CartContext.Provider value={{  addToCart , getCart  ,  updateProductQuantity , deleteProduct }}>

{props.children}


    </CartContext.Provider>

}




