import React from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContainer } from '../pages/auth/login/loginContainer'
import { RecoverPasswordContainer } from '../pages/auth/recoverPassword/recoverPasswordContainer'
import { RegisterView } from '../pages/auth/register/registerView'

export const publicRoutes = [
  {
    path: '/',
    element: <LoginContainer />,
  },
  {
    path: '/api/login/password',
    element: <RecoverPasswordContainer/>,
  },
  {
    path: '/api/login/newUser',
    element: <RegisterView handleCreateUser={undefined}/>,
  },

]
