// AppRouter.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import UserHomePage from "./pages/userHome";
import AdminHomePage from "./pages/adminHome";
import UpdateDetailsPage from "./pages/updateDetails";
import UpdatePasswordPage from "./pages/updatePassword";
import UserDetails from "./pages/userDetails";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <UserHomePage />,
  },
  {
    path: "/admin",
    element: <AdminHomePage />,
  },
  {
    path: "/user/updateDetails",
    element: <UpdateDetailsPage />,
  },
  {
    path: "/user/updatePassword",
    element: <UpdatePasswordPage />,
  },
  {
    path: "/user/personalDetails",
    element: <UserDetails />,
  },
]);

export default AppRouter;
