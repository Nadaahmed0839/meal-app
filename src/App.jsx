import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNav from './components/SideNav/SideNav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MealDetails from './components/mealDetails/mealDetails';



function App() {
  const [count, setCount] = useState(0)

  const x = createBrowserRouter([
    {
      path: "/", element: <Layout />, children:
        [
          { index: true, element: <Home /> },
          { path: "/meal/:id", element: <MealDetails /> }
        ]
    }


  ])

  return (
    <>

      <RouterProvider router={x}></RouterProvider>

    </>
  )
}

export default App
