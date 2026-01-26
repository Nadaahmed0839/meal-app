import "./App.css";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./components/Layouts/MainLayout/Layout";
import MealDetails from "./Pages/MealDetails/MealDetails";

function App() {
  const x = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/meal/:id", element: <MealDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
