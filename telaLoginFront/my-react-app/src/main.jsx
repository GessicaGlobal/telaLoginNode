import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AuthRoutes } from './pages/auth/routes/auth.routes'
import { AppRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {AuthRoutes} />  
</React.StrictMode>,
)
