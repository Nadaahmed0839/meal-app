import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home';
import { createBrowserRouter, router, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MealDetails from './components/MealDetails/MealDetails'


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
