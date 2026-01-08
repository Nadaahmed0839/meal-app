import React from 'react'
import style from "./Footer.module.css"
import logo from "../../assets/logo-BfNap0Pe.png"


export default function Footer() {
  return <>


    <div className='relative bottom-0 end-0 start-0 py-5 mx-5 z-50'>


      <div className='flex items-center'>
        <img className='w-10 me-3' src={logo} alt="" />
        <h5 className='font-bold text-2xl'>Recipe</h5>
      </div>
      <h4 className='font-bold text-2xl text-blue-700'>Route</h4>
      <hr className='border border-gray-200 mt-7' />
      <p className='text-[14px] pt-5 text-gray-600'>© 2025 Nagy Osama™. All Rights Reserved.</p>

    </div>


  </>
}
