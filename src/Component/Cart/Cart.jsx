import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import {toast} from 'react-hot-toast';


export default function Cart() {
const [cartDetails, setcartDetails] = useState(null)


let {getCart , updateProductQuantity , deleteProduct} = useContext(CartContext)


async function getItems(){
let res =   await getCart()

console.log(res.data.data)

if (res.data.status == "success"){
  setcartDetails(res.data.data)
}
}


 async function updateCart(id , count) {

 let update =  await updateProductQuantity(id, count) 
 console.log("update:" , update)
 if (update.data.status == "success"){

   setcartDetails(update.data.data)
   if (count == 0) {
  toast  ( ' The Product Remove From Your Cart'  )
}
else {
   toast(  count + ` product of added to your cart successfuly ` , {icon: '✅' } )
}
   





 }
 else {
  toast("ERROR " , {icon : '❌'})

 }

}


async function deleteItem (id){
 let res = await deleteProduct(id)
 console.log("delete" , res)

 if (res.data.status == "success"){
  setcartDetails(res.data.data)
  toast( ` product deleted from your cart  ` , {icon: '✅' } )
}

}





useEffect(() => {
getItems()

}, [])


  return (
<>




{cartDetails?.products?.length > 0 ?
<>
<div className=" w-[80%] m-auto relative overflow-x-auto shadow-md sm:rounded-lg">
   <div className="w-[50%]  mx-auto my-6 p-4 flex items-center justify-center bg-emerald-100 border border-emerald-300 rounded-md shadow-sm">
  <h2 className="text-lg md:text-xl font-semibold text-emerald-700">
    🛒 Total Price:
  </h2>
  <span className="text-xl md:text-2xl font-bold text-emerald-900">
    {cartDetails?.totalCartPrice} EGP
  </span>
</div>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>


     


      {cartDetails?.products?.map((product)=><tr key={product.product.id}
       className="bg-white border-b dark:bg-gray-800 dark:border-gray-700
        border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         { product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button
            onClick={()=>updateCart(product?.product?.id , product?.count -1)  } 
         

             className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
             <span>{product.count}</span>
            </div>
            <button
            onClick={()=>updateCart(product?.product?.id , product?.count +1)}
            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.price * product.count} EGP
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>deleteItem(product?.product?.id)}
           className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">
            Remove</span>
        </td></tr>)  }
     
    </tbody>
  </table>
</div>

</> : <>  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#D0FAE5] px-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty Cart"
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-700">Your Cart is Empty</h1>
      <p className="text-gray-600 mt-2 mb-6 max-w-md">
        You haven’t added any products yet. Browse our collection and add something you love!
      </p>
      <a
        href="/product"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300"
      >
        Start Shopping
      </a>
    </div></>
}






</>
  )
}
