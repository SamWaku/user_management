// AppRouter.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import UserHomePage from "./pages/userHome";
import AdminHomePage from "./pages/adminHome";

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
]);

export default AppRouter;
