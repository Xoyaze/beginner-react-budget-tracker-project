import React from 'react'
import Header from '../Components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

const LandPage = () => {

    const { username } = useLoaderData();

  return (
    <div className='h-screen w-screen bg-theme-100'>
        <Header username={username}/>
        <Outlet />
    </div>
  )
}

export default LandPage
