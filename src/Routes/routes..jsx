import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "@/pages/About/About";
import Appointment from "@/pages/Appointment/Appointment";
import Login from "@/pages/Login/Login";
import DoctorProfile from "@/pages/DoctorProfile/DoctorProfile";
import MyAppointment from "@/pages/Dashboard/MyAppointment/MyAppointment";

import Dashboard from "@/pages/Dashboard/Dashboard/Dashboard";
import AllUsers from "@/pages/Dashboard/AllUsers/AllUsers";
import AddDoctor from "@/pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "@/pages/Dashboard/ManageDoctors/ManageDoctors";
import SignIn from "@/pages/SignIn/SignIn";
import Contact from "@/pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/profile/:id",
        element: <DoctorProfile />,
      },
      {
        path: "/myappointment",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/allusers",
        element: <AllUsers />,
      },
      {
        path: "/addDoctor",
        element: <AddDoctor />,
      },
      {
        path: "/manageDoctor",
        element: <ManageDoctors />,
      },
    ],
  },
]);
