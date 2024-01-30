import React from 'react'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'


export const OutletProtected = () => {
  return (
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
        >
        <Outlet />
      </Suspense>
  )
}
