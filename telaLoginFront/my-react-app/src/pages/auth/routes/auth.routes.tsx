
// import React from "react";
// import { Navigate, createBrowserRouter } from "react-router-dom";
// import { RecoverPassword } from "../recoverPassword";
// import { LoginContainer } from "../login/loginContainer"
// import { OutletProtected } from "../../../routes/outlet";
// import { Register } from "../register";
// import { Users } from "../../Users/userContainer";
// import { Admin } from "../../Admin/adminContainer";

// export const AuthRoutes = createBrowserRouter([
//   {
//     path: '/api/login/password',
//     element: <RecoverPassword />,
//   },

//   {
//     path: '/api/login/newUser',
//     element: <Register />,
//   },
//   {
//     path: "/",
//     element: <LoginContainer />,
//   },


//   {
//     path: "*",
//     element: <OutletProtected />,
//     children: [
//       { path: 'users/*', element: <Users /> },
//       { path: 'admin/*', element: <Admin /> },
//     ],
//   }

//]);
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ErrorPage } from '../../error'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginContainer } from "../login/loginContainer";
import { RecoverPasswordContainer } from "../recoverPassword/recoverPasswordContainer";
import { UserContainer } from "../../Users/userContainer";
import { AdminContainer } from "../../Admin/adminContainer/index";
import { RegisterContainer } from "../register/registerContainer/index";
import { RegisterView } from "../register/registerView";

export const AuthRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer />,
    errorElement: <ErrorPage />,
  },

  {
    path: "users/*",
    element: <UserContainer />,
  },
  {
    path: "admin/*",
    element: <AdminContainer />,
  },

  {
    path: '/api/login/password',
    element: <RecoverPasswordContainer />,
    errorElement: <ErrorPage />,

  },
  {
    path: '/api/login/newUser',
    element: <RegisterView handleCreateUser={undefined} />,
    errorElement: <ErrorPage />,

  },

]);

