import React, { useContext, useState } from 'react'
import {useFormik} from "formik" ;
import * as yup from "yup";
import axios from "axios" ;
import {Link, useNavigate} from "react-router-dom"
import Login from './../Login/Login';
import { UserContext } from '../../Context/userContext';









export default function Register() {
  let {userLogin , setuserLogin} = useContext(UserContext)
 const [apiError, setapiError] = useState("") ;
 const [isLoading, setisLoading] = useState(false)

let navigate = useNavigate() ;


 function handleregister(values){
  setisLoading(true)
//   if (values.password !== values.rePassword) {
//   alert("Passwords do not match");
//   return;
// }
  console.log(values)

let {data} =  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
.then(res => {
setisLoading(false)

if (res.data.message == "success"){
  console.log("okaaaay")
  localStorage.setItem("userToken" , res.data.token)
  setuserLogin(res.data.token)
  navigate("/")
}

})


.catch(err => {
  setisLoading(false);
    // console.log(err.response.data.message); 
    setapiError (err.response.data.message)
  });



// console.log(err)

// if (data.message == "success"){
//   navigate("/")

// }
// else {
// console.log(data.message)

// }
  

}


let validationSchema = yup.object().shape({
    name : yup.string().min(3,"min length must be 3 ").max(15, "max length must be 10 ").required("name is required ") ,
    email : yup.string().required("mail is required") ,
    password:yup.string().required("password is required").min(6,"password length must be greater than 6"),
    rePassword:yup.string().oneOf([yup.ref("password")] , "not matched with password ").required("enter rePassword"),
    phone : yup.string().matches(/^01[1250][0-9]{8}$/ , "phone not valid ").required("phone is required ")

})





function submit(values) {
    // console.log("done", values)
}





    let formik = useFormik ({
        initialValues : {
            name:"" ,
            email:"" ,
            password :"" ,
            rePassword:"",
            phone:""
        } ,
        validationSchema:validationSchema ,
        onSubmit: handleregister,
    })









  return (
   
    <>
    <h2 className='text-green-400 text-3xl'>Register Now </h2>
  <form  onSubmit={formik.handleSubmit}  className="max-w-md mx-auto">

{apiError ? <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
  <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium"> {apiError} </span> 
  </div>
</div> : null}







    {/* name */}
  <div className="relative z-0 w-full mb-5 group">
      <input
       type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        id="name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      
    <label htmlFor="name" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Enter Your Name</label>
  {formik.errors.name && formik.touched.name ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400" role="alert">
  <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">{formik.errors.name}</span> 
  </div>
</div> : null }
  
  
  </div>


  {/* email */}
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="email" 
      name="email" 
       value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      id="email"
       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Enter Your Email</label>
  {formik.errors.email && formik.touched.email ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400" role="alert">
  <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">{formik.errors.email}</span> 
  </div>
</div> : null }
  
  
  </div>



{/* password */}
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="password" 
    name="password" 
     value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    
    id="password"
     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="password" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Enter Your Password</label>
 {formik.errors.password && formik.touched.password ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400" role="alert">
  <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">{formik.errors.password}</span> 
  </div>
</div> : null }
 
  </div>

{/* rePassword */}

  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="rePassword" 
       value={formik.values.rePassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
   
      
      id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="rePassword" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Enter rePassword</label>
 
 {formik.errors.rePassword && formik.touched.rePassword ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400" role="alert">
  <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">{formik.errors.rePassword}</span> 
  </div>
</div> : null }
 
 
  </div>

{/* phone */}

   <div className="relative z-0 w-full mb-5 group">
      <input type="tel" name="phone"
       value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      
      id="phone"
       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone"
       className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Enter your Phone </label>
  
  {formik.errors.phone && formik.touched.phone ? <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400" role="alert">
  <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">{formik.errors.phone}</span> 
  </div>
</div> : null }
  
  
  </div>







<div>

   <button 
  type="submit"
   className="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    
    {isLoading ? <i className='fas fa-spinner fa-spin'></i>     : "Register"}
    </button>


{/* <Link to={/Login}><span>Do you have an account ? Login Now</span> </Link>  */}
<Link to={"/Login"}><span className='text-blue-800 underline text-[10px] px-2' >Do you have an account ? Login Now</span> </Link>

</div>
  
 
  </form>
  </>
  )
}
