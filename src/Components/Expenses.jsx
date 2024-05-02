import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const Expenses = () => {

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : []
  });

  const username = JSON.parse(localStorage.getItem('username'));

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  }

  return (
    <div className='h-[80%] w-full p-4 mt-5'>
      <div className='h-[20%] w-full text-5xl'>
        < h1>Hey, <span className='text-theme-200'>{username}</span>. Your expenses are listed here.</h1>
      </div>
      <div className='h-[80%] w-full flex justify-center items-center'>
        <ul className='h-full w-[95%] custom-ul flex flex-col gap-y-10 p-3'>
          <li className='text-4xl flex justify-around'>
              <div className='h-full w-[60%] '>
                  <h1 className='ml-16 text-black border border-black bg-theme-200 w-[48%] text-center rounded-2xl'>Your Expenses</h1>
              </div>
              <div className='h-full w-[40%] flex justify-around items-center'>
                <h1 className='text-black border border-black bg-theme-200 w-[48%] text-center rounded-2xl'>Categories</h1>
                <h1 className='text-black border border-black bg-theme-200 w-[48%] text-center rounded-2xl'>Delete</h1>
              </div>
          </li>


          {expenses.map(expense => (
            <li key={expense.id} className='text-4xl flex justify-around'>
            <div className='h-full w-[60%] '>
                <h1 className='text-black ml-20'>{expense.amount}</h1>
            </div>
            <div className='h-full w-[40%] flex justify-around items-center'>
              <h1 className='text-black w-[48%] text-center hover:text-white transition-hover duration-100 cursor-pointer'>{expense.category}</h1>
              <h1 className='text-black w-[48%] text-center hover:text-red-600 transition-hover duration-100 cursor-pointer active:text-black'>
                <FontAwesomeIcon onClick={() => {handleDeleteExpense(expense.id)}} icon={ faTrash } />
              </h1>
            </div>
        </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Expenses