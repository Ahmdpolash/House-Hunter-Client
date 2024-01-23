import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DashLayout from "../Components/Dashboard/DashLayout";

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
        path: ''
      }
    ]
  }
]);

export default Router;
