import React from 'react'
import CreateBudgetForm from './CreateBudgetForm'

const Budgets = (props) => {
  return (
    <div className='h-[88%] w-full p-4 text-2xl'>
      <div className='h-4/12 w-full text-5xl mt-4'>
        <h1>Hey there, <span className='text-theme-200 font-imported '>{props.username}!</span></h1>
      </div>
      <CreateBudgetForm />
    </div>
  )
}

export default Budgets
