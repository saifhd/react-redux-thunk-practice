import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function AuthHook() {
    const accessToken = useSelector((state) => state.auth.accessToken)
    const location = useLocation()
  return (
    <>
        {
            accessToken ? <Outlet /> : <Navigate to={'/login'} state={{from:location.pathname}} />
        }
    </>
  )
}

export default AuthHook