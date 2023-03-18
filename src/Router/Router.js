import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Admin from "../Dashboard/Admin/Admin";
import AllEmployees from "../Dashboard/AllEmployees/AllEmployees";
import DashboardClients from "../Dashboard/DashboardClients/DashboardClients";
import EmployeeProfile from "../Dashboard/EmployeeProfile/EmployeeProfile";
import Employees from "../Dashboard/Employees/Employees";
import Projects from "../Dashboard/Projects/Projects";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardLayouts from "../Layout/DashboardLayouts/DashboardLayouts";
import Home from "../Page/Home/Home/Home";
import SignIn from "../Page/SignIn/SignIn";
import SignUp from "../Page/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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
      element: <PrivetRoute><DashboardLayouts></DashboardLayouts></PrivetRoute>,
      children: [
        {
          path: "/dashboard/dashboardEmployees",
          element: <Employees></Employees>
        },
        {
          path: "/dashboard/admin",
          element: <Admin></Admin>
        },
        {
          path: "/dashboard/client",
          element: <DashboardClients></DashboardClients>
        },
        {
          path: "/dashboard/all-employees",
          element: <AllEmployees />
        },
  
        {
          path: "/dashboard/employees/:id",
          element: <EmployeeProfile />,
          children: [
            {
              path: '/dashboard/employees/:id/',
              element: <Projects></Projects>
            },
            {
              path: '/dashboard/employees/:id/projects',
              element: <Projects></Projects>
            },
            
          ]
        },
  
      ]
    },
  ]);