import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Activity from "../Dashboard/Activity/Activity";
import Calender from "../Dashboard/Calender/Calender";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Document from "../Dashboard/Document/Document";
import Profile from "../Dashboard/Profile/Profile";
import DashboardLayouts from "../Layout/DashboardLayouts/DashboardLayouts";
import Home from "../Page/Home/Home/Home";
import SignIn from "../Page/SignIn/SignIn";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "../PrivetRoute/PrivetRoute";


export const  router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
    },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        
        {
          path: '/dashboard/document',
          element: <Document></Document>
        },
        {
          path: '/dashboard/calender',
          element: <Calender></Calender>
        },
        {
          path: '/dashboard/activity',
          element: <Activity></Activity>
        },
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>
        },
        
      ]
    },
  ]);