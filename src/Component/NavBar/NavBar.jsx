// import React, { useContext } from 'react'
// import img from "../../assets/freshcart-logo.svg"
// import { Link, useNavigate } from 'react-router-dom'
// import { UserContext } from '../../Context/userContext'



// export default function NavBar() {


//   let {userLogin , setuserLogin} = useContext (UserContext)
//   let Navigate = useNavigate();


//   function signout () {

//   localStorage.removeItem("userToken") ;
//   setuserLogin(null);

// Navigate("login")
//   }





//   return (


// <nav className="bg-[#F0FDF4]  border-gray-200 fixed top-0 right-0 left-0 z-50">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <div className="right flex items-center gap-4 ">
//     <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src={img} className="h-8" alt="Flowbite Logo" width={120} />
        
       
//     </Link>



//  {userLogin != null ? <>   <ul className='flex gap-4'>
//       <li><Link to="" className='text-gray-700 hover:text-blue-900' >Home</Link></li>
//         <li><Link className='text-gray-700  hover:text-blue-900' to="cart" >Cart</Link></li>
//           <li><Link to="product" className='text-gray-700  hover:text-blue-900'>Product</Link></li>
//             <li><Link to="categories" className='text-gray-700  hover:text-blue-900'>Categories</Link></li>
//               <li><Link to="brands" className='text-gray-700  hover:text-blue-900'>Brands</Link></li>
       
//     </ul> </> : null } 
//     </div>
   

//     { <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//      <ul className='flex gap-3'>
//       <li><i className="fa-brands fa-facebook"></i></li>
//        <li><i className="fa-brands fa-twitter"></i></li>
//         <li><i className="fa-brands fa-instagram"></i></li>
//          <li><i className="fa-brands fa-linkedin"></i></li>

//          {userLogin != null ?  <span   onClick={signout} className='text-gray-700  hover:text-blue-900  cursor-pointer'>Signout</span> 
         
         
//          : <><li><Link to="login" className='text-gray-700  hover:text-blue-900'>Login</Link></li>
//              <li><Link to="register" className='text-gray-700  hover:text-blue-900'>Register</Link></li></> }
          
              
  
//      </ul>
//     </div> }
//   </div>
// </nav>

//   )
// }






import React, { useContext, useState } from 'react';
import img from "../../assets/freshcart-logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

export default function NavBar() {
  let { userLogin, setuserLogin } = useContext(UserContext);
  let navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function signout() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    navigate("login");
  }

  return (
    <nav className="bg-[#F0FDF4] border-gray-200 fixed top-0 right-0 left-0 z-50 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Left Side - Logo and Main Nav */}
        <div className="flex items-center md:order-1">
          {/* Logo */}
          <Link to="" className="flex items-center mr-4">
            <img src={img} className="h-8" alt="FreshCart Logo" width={120} />
          </Link>
          
          {/* Main Navigation - Desktop */}
          {userLogin && (
            <ul className="hidden md:flex md:space-x-6">
              <li>
                <Link to="" className="text-gray-700 hover:text-blue-900 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="cart" className="text-gray-700 hover:text-blue-900 font-medium">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="product" className="text-gray-700 hover:text-blue-900 font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link to="categories" className="text-gray-700 hover:text-blue-900 font-medium">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="brands" className="text-gray-700 hover:text-blue-900 font-medium">
                  Brands
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Right Side - Social and Auth Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 md:order-2">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-900">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          {/* Auth Links */}
          {userLogin ? (
            <button 
              onClick={signout}
              className="text-gray-700 hover:text-blue-900 font-medium"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link to="login" className="text-gray-700 hover:text-blue-900 font-medium">
                Login
              </Link>
              <Link to="register" className="text-gray-700 hover:text-blue-900 font-medium">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-900 ml-4 md:order-3"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu - Full Width (Centered) */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden md:order-4`}>
          <div className="pt-4 pb-2">
            {/* Main Navigation - Mobile */}
            {userLogin && (
              <ul className="space-y-4 text-center">
                <li>
                  <Link to="" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="cart" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Cart
                  </Link>
                </li>
                <li>
                  <Link to="product" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="categories" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="brands" className="block py-2 text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                    Brands
                  </Link>
                </li>
              </ul>
            )}

            {/* Social and Auth - Mobile (Centered) */}
            <div className="mt-6 flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  <i className="fa-brands fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
              </div>

              {userLogin ? (
                <button 
                  onClick={() => {
                    signout();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-blue-900 font-medium text-lg"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex space-x-6">
                  <Link 
                    to="login" 
                    className="text-gray-700 hover:text-blue-900 font-medium text-lg" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="register" 
                    className="text-gray-700 hover:text-blue-900 font-medium text-lg" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}