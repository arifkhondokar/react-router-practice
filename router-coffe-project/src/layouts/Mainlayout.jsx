import React from 'react'
import Header from './Header'
import Newslatter from './Newslatter'
import Band from './Band'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Mainlayout = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    <Newslatter/>
    <Band/>
    <Footer/>
    </>
    
  )
}

export default Mainlayout