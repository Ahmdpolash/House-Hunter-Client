import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DashLayout from "../Components/Dashboard/DashLayout";
import MyHouse from "../Components/Dashboard/MyHouse";
import AddHouse from "../Components/Dashboard/AddHouse";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/dashboard',
    element:<DashLayout/>,
    children: [
      {
        path: '/dashboard/myHouse',
        element:<MyHouse/>
      },
      {
        path: '/dashboard/addHouse',
        element:<AddHouse/>
      }
    ]
  }
]);

export default Router;
