import React from 'react'
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';



export default function Layout() {
  return (
    <>
<NavBar></NavBar>

<div className='my-20 text-center'>
<Outlet></Outlet>
</div>

<Footer></Footer>


</>

  )
}
