import React from 'react'
import style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'
import Footer from '../Footer/Footer'


export default function Layout() {
  return <>

    <SideNav />
    <Outlet />
    <Footer />

  </>
}
