import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContainer } from '../pages/Users/userContainer';
import { AdminContainer } from '../pages/Admin/adminContainer';
import { OutletProtected } from './outlet';
import { AppRoutes } from '../routes/index'

export const protectedRoutes = [
  {

    path: '/app',
    element: 
    // <AppRoutes>
      <OutletProtected />,
      // </AppRoutes>,
    exact: true,
    
    children:[
      { path: 'users/*', element: <UserContainer /> },
      { path: 'admin/*', element: <AdminContainer /> },
      { path: '*', element: <Navigate to="." /> }
    ] 
  },
 
];
