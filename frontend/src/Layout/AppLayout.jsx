import React from 'react'
import { Outlet } from 'react-router-dom'
import TheNav from '../Components/TheNav'

function AppLayout() {
  return (
    <>
        <TheNav />
        <div className='container max-w-6xl mx-auto mt-2'>
          <Outlet />
        </div>
    </>
  )
}

export default AppLayout