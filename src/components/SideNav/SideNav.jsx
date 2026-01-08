import React from 'react'
import style from "./SideNav.module.css"
import logo from "../../assets/logo-BfNap0Pe.png"
import { Link } from 'react-router-dom'

export default function SideNav() {
  return <>

    <div>
      <button className="absolute z-30 top-2 start-3 text-gray-500 lg:opacity-0  focus:border-2 focus:border-gray-200 rounded-base text-[20px] px-2 py-2" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
        <svg className="w-6 h-6 cursor-pointer" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg>
      </button>
    </div>

    <div id="drawer-navigation" className="fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform  -translate-x-full lg:translate-x-0 bg-neutral-primary-soft w-[16rem]" tabIndex="-1" aria-labelledby="drawer-navigation-label">

      <div className="pb-1 pt-4 flex items-center w-58  mx-auto lg:w-58">
        <img src={logo} className="w-full" alt="Flowbite Logo" />
      </div>


      <div className="py-5 overflow-y-auto">

        <ul className="space-y-5">


          <li className='px-3'>

            <Link to="/" className="flex items-center pe-3 pb-1.5 font-sec shadow-lg shadow-[#fdba74] hover:shadow-none hover:scale-105 transition-all duration-200 bg-[#F29724] py-[0.55rem] px-7 w-58 rounded-[13px] font-bold">
              <svg className='text-white text-[20px]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path></svg>
              <span className="ms-3  text-white text-[18px]">Meals</span>
            </Link>


          </li>



          <li className='px-3'>


            <Link to="" className="flex items-center pe-3 pb-1.5  text-black text-[18px] font-sec border border-gray-300 py-[0.55rem] px-7 w-58 hover:scale-105 transition-all duration-200 rounded-[13px] ">
              <svg className='text-black text-[20px]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path></svg>
              <span className="ms-3">Ingredients</span>
            </Link>


          </li>


          <li className='px-3'>



            <Link to="" className="flex items-center pe-3 pb-1.5  text-black text-[18px] font-sec border  border-gray-300 py-[0.55rem] px-7 w-58 hover:scale-105 transition-all duration-200 rounded-[13px]">
              <svg className='text-black text-[20px]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path></svg>
              <span className="ms-3">Area</span>
            </Link>



          </li>


        </ul>


      </div>



    </div>


  </>
}
