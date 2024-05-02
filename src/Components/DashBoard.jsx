import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SetUp from '../pages/SetUp';
import Budgets from './Budgets';

const DashBoard = () => {
    const {username} = useLoaderData();
  return (
    <>
    {username ? (
    <Budgets username={username} />
    ) : (
      <SetUp />
    )}
    </>
  )
}

export default DashBoard