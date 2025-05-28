import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'




export default function useProduct() {


function getProducts(){
 return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`) 

}


let ProductInfo = useQuery({
  queryKey:["recentProduct"] ,
  queryFn:getProducts
})


return ProductInfo

 
}
